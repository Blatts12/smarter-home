import React, { useCallback, useEffect, useRef } from "react";
import interact from "interactjs";
import { useUiStore } from "../../store/uiStore";

interface DraggableWindow {
  children: React.ReactNode;
  id: string;
}

const DraggableWindow: React.FC<DraggableWindow> = ({ children, id }) => {
  const settingsWindow = useUiStore.getState().settingsWindow;
  const setSettings = useUiStore((state) => state.setSettings);
  const draggable = useRef<HTMLDivElement | null>(null);

  const resizeListener = useCallback((event: any) => {
    var target = event.target as HTMLDivElement;
    if (target) {
      var x = parseFloat(target.getAttribute("data-x") || "0");
      var y = parseFloat(target.getAttribute("data-y") || "0");

      settingsWindow.width = event.rect.width;
      settingsWindow.height = event.rect.height;
      target.style.width = event.rect.width + "px";
      target.style.height = event.rect.height + "px";

      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.transform = "translate(" + x + "px," + y + "px)";

      settingsWindow.x = x;
      settingsWindow.y = y;
      target.setAttribute("data-x", String(x));
      target.setAttribute("data-y", String(y));

      setSettings(settingsWindow);
    }
  }, []);

  const dragMoveListener = useCallback((event: any) => {
    var target = event.target as HTMLDivElement;
    if (target) {
      var x = parseFloat(target.getAttribute("data-x") || "0") + event.dx;
      var y = parseFloat(target.getAttribute("data-y") || "0") + event.dy;

      target.style.transform = "translate(" + x + "px, " + y + "px)";

      settingsWindow.x = x;
      settingsWindow.y = y;
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);

      setSettings(settingsWindow);
    }
  }, []);

  useEffect(() => {
    if (!draggable.current) return;

    const interactable = interact(draggable.current)
      .resizable({
        edges: {
          left: true,
          right: true,
          bottom: true,
          top: true,
        },
        listeners: {
          move: resizeListener,
        },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: "parent",
          }),
          interact.modifiers.restrictSize({
            max: "parent",
            min: {
              width: 420,
              height: 340,
            },
          }),
        ],
      })
      .draggable({
        listeners: {
          move: dragMoveListener,
        },
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
      });

    return () => {
      if (draggable.current) {
        interactable.unset();
      }
    };
  }, [draggable, id]);

  return (
    <div
      className="draggable"
      id={id}
      ref={draggable}
      data-x={settingsWindow.x}
      data-y={settingsWindow.y}
      style={{
        width: settingsWindow.width,
        height: settingsWindow.height,
        transform: `translate(${settingsWindow.x}px, ${settingsWindow.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default DraggableWindow;
