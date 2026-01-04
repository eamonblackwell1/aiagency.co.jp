"use client";

import { useEffect } from "react";

/**
 * This component fixes a common issue with Japanese IME (and other IMEs) where
 * pressing "Enter" to confirm a character selection accidentally submits the chat message.
 * 
 * It works by intercepting the 'Enter' keydown event during IME composition
 * and stopping it from propagating to the GoHighLevel widget's listeners.
 * 
 * Note: This fix relies on the widget being rendered in the Shadow DOM (which seems to be the case).
 * If the widget were in an iframe, this code would not be able to intercept the events.
 */
export function ChatWidgetFix() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Enter key
      if (e.key === "Enter" || e.keyCode === 13) {
        // Check if IME is active
        // e.isComposing is the standard
        // some browsers might strictly use compositionstart/end state, but modern ones support isComposing on event
        if (e.isComposing || e.keyCode === 229) {
          // Identify if the event target is the chat widget
          // The tag name is usually 'CHAT-WIDGET' for LeadConnector
          const target = e.target as HTMLElement;
          const tagName = target?.tagName?.toUpperCase();
          
          // Check if it's the custom element host (Shadow DOM retargeting)
          // or if the element is inside the chat widget (Light DOM fallback)
          if (tagName === 'CHAT-WIDGET' || target.closest?.('chat-widget')) {
            // Stop immediate propagation to prevent other listeners (like the widget's submit handler) from running
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Optionally prevent default if strictly needed, though stopping propagation is usually enough
            // e.preventDefault(); 
            
            console.debug("Blocked premature Enter submit in Chat Widget");
          }
        }
      }
    };

    // Attach to window with capture=true to intercept the event BEFORE it reaches the widget's internal logic
    // or bubbles up to their document-level listeners.
    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return null;
}

