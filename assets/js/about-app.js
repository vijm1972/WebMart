/**
 * WebMart Accordion Engine
 */
document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll("[data-accordion-item]");

    const setItemState = (item, expand) => {
        const trigger = item.querySelector(".wm-accordion-trigger");
        const panel = item.querySelector(".wm-accordion-panel");
        
        if (expand) {
            item.classList.add("is-open");
            trigger.setAttribute("aria-expanded", "true");
            panel.style.height = `${panel.scrollHeight}px`;
        } else {
            item.classList.remove("is-open");
            trigger.setAttribute("aria-expanded", "false");
            panel.style.height = "0px";
        }
    };

    const collapseActiveSiblings = (currentOpenItem) => {
        accordionItems.forEach((item) => {
            if (item !== currentOpenItem && item.classList.contains("is-open")) {
                setItemState(item, false);
            }
        });
    };

    const handleToggle = (item) => {
        const isOpen = item.classList.contains("is-open");
        if (!isOpen) collapseActiveSiblings(item);
        setItemState(item, !isOpen);
    };

    accordionItems.forEach((item) => {
        const trigger = item.querySelector(".wm-accordion-trigger");
        
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            handleToggle(item);
        });
    });

    window.addEventListener("resize", () => {
        accordionItems.forEach((item) => {
            if (item.classList.contains("is-open")) {
                const panel = item.querySelector(".wm-accordion-panel");
                panel.style.height = `${panel.scrollHeight}px`;
            }
        });
    });

    if (accordionItems.length > 0) {
        setItemState(accordionItems[0], true);
    }
});