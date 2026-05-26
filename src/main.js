// VisionCraft Studios - Vanilla JavaScript Core Controller
// Managing all dynamic interactions, responsive menus, animation states, and multi-flow portals.

document.addEventListener("DOMContentLoaded", () => {
  
  // --- DOM ACCESS HOOKS ---
  const mobileToggle = document.getElementById("mobile-toggle");
  const burgerIcon = document.getElementById("burger-icon");
  const mobileDrawer = document.getElementById("mobile-drawer");
  
  const modalPortal = document.getElementById("modal-portal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalWindow = document.getElementById("modal-window");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  
  const formArea = document.getElementById("modal-form-area");
  const successScreen = document.getElementById("modal-success-screen");
  const successHeadline = document.getElementById("success-headline");
  const successMessage = document.getElementById("success-message");
  const successCloseBtn = document.getElementById("success-close-btn");
  
  const formLogin = document.getElementById("form-login");
  const formContact = document.getElementById("form-contact");
  const viewLearnMore = document.getElementById("view-learn-more");
  const learnMoreTitle = document.getElementById("learn-more-title");
  
  const heroCtaBtn = document.getElementById("hero-cta-btn");
  const portalBtn = document.getElementById("portal-btn");
  const mobilePortalBtn = document.getElementById("mobile-portal-btn");
  
  const navTargets = document.querySelectorAll("[data-nav-target]");
  const featureCards = document.querySelectorAll("[data-feature-card]");
  const learnMoreDismissBtn = document.getElementById("learn-more-dismiss-btn");
  const learnMoreSubmitBtn = document.getElementById("learn-more-submit-btn");

  let activeModalType = "login"; // Track current category for accurate dynamic success messages
  let currentItemDetail = ""; // Variable to hold context

  // --- MOBILE DRAWER CONFIGURATION ---
  let isMobileOpen = false;
  function toggleMobileDrawer() {
    isMobileOpen = !isMobileOpen;
    if (isMobileOpen) {
      mobileDrawer.classList.remove("hidden");
      // Trigger height transition
      setTimeout(() => {
        mobileDrawer.style.maxHeight = "400px";
      }, 10);
      // Morph burger icon into a simple close cross
      burgerIcon.innerHTML = `
        <line x1="18" x2="6" y1="6" y2="18"></line>
        <line x1="6" x2="18" y1="6" y2="18"></line>
      `;
    } else {
      mobileDrawer.style.maxHeight = "0";
      setTimeout(() => {
        mobileDrawer.classList.add("hidden");
      }, 300);
      burgerIcon.innerHTML = `
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      `;
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMobileDrawer);
  }

  // Close drawer helper
  function closeMobileDrawer() {
    if (isMobileOpen) toggleMobileDrawer();
  }


  // --- MODAL PORTAL ENGINE ---
  function openModal(type, parameter = "") {
    activeModalType = type;
    currentItemDetail = parameter;

    // Reset Form state vs Success screen visibility
    formArea.classList.remove("hidden");
    successScreen.classList.add("hidden");

    // Decouple Forms displays
    formLogin.classList.add("hidden");
    formContact.classList.add("hidden");
    viewLearnMore.classList.add("hidden");

    // Display correct form
    if (type === "login") {
      formLogin.classList.remove("hidden");
    } else if (type === "contact") {
      formContact.classList.remove("hidden");
      const contactNameInput = document.getElementById("input-contact-name");
      if (contactNameInput) contactNameInput.focus();
    } else if (type === "learn-more") {
      viewLearnMore.classList.remove("hidden");
      if (learnMoreTitle) learnMoreTitle.textContent = parameter;
    }

    // Modal Portal Reveal
    modalPortal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Clip viewport scroll

    // Trigger smooth layout fade-in transition
    setTimeout(() => {
      modalBackdrop.classList.remove("opacity-0");
      modalBackdrop.classList.add("opacity-100");
      
      modalWindow.classList.remove("scale-95", "opacity-0");
      modalWindow.classList.add("scale-100", "opacity-100");
    }, 15);
  }

  function closeModal() {
    // Exiting transition sequence
    modalBackdrop.classList.remove("opacity-100");
    modalBackdrop.classList.add("opacity-0");
    
    modalWindow.classList.remove("scale-100", "opacity-100");
    modalWindow.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modalPortal.classList.add("hidden");
      document.body.style.overflow = ""; // Reactivate scroll
    }, 300);
  }

  // --- BUTTON EVENT ROUTING ---
  
  // Close buttons
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (successCloseBtn) successCloseBtn.addEventListener("click", closeModal);
  if (learnMoreDismissBtn) learnMoreDismissBtn.addEventListener("click", closeModal);

  // Home logo click dismiss files/states
  const navLogo = document.getElementById("nav-logo");
  if (navLogo) {
    navLogo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMobileDrawer();
    });
  }

  // Portal access buttons
  if (portalBtn) {
    portalBtn.addEventListener("click", () => {
      openModal("login");
    });
  }
  if (mobilePortalBtn) {
    mobilePortalBtn.addEventListener("click", () => {
      closeMobileDrawer();
      openModal("login");
    });
  }

  // Hero section action
  if (heroCtaBtn) {
    heroCtaBtn.addEventListener("click", () => {
      openModal("contact");
    });
  }

  // Content targets / Nav Links
  navTargets.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeMobileDrawer();
      const target = btn.getAttribute("data-nav-target");
      if (target === "Contact") {
        openModal("contact");
      } else {
        openModal("learn-more", target);
      }
    });
  });

  // Feature block interactions
  featureCards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetTitle = card.getAttribute("data-feature-card");
      openModal("learn-more", targetTitle);
    });
  });


  // --- STREAMLINED SECURE SUBMISSION EMULATION ---
  function showFormLoading(formElement, activeSubmitButton) {
    const textSpan = activeSubmitButton.querySelector(".btn-text");
    const arrowSvg = activeSubmitButton.querySelector(".btn-arrow");
    const spinner = activeSubmitButton.querySelector(".spinner");

    if (textSpan) textSpan.style.opacity = "0.3";
    if (arrowSvg) arrowSvg.classList.add("hidden");
    if (spinner) spinner.classList.remove("hidden");

    // Block pointer inputs while loading
    activeSubmitButton.style.pointerEvents = "none";

    setTimeout(() => {
      // Re-enable states
      if (textSpan) textSpan.style.opacity = "1";
      if (arrowSvg) arrowSvg.classList.remove("hidden");
      if (spinner) spinner.classList.add("hidden");
      activeSubmitButton.style.pointerEvents = "";

      // Hide input form view
      formArea.classList.add("hidden");
      successScreen.classList.remove("hidden");

      // Set customized result copy based on source form category
      if (activeModalType === "login") {
        successHeadline.textContent = "Workspace Unlocked";
        successMessage.textContent = "Welcome back, Director. Security keys verified successfully against the production servers.";
      } else if (activeModalType === "contact") {
        successHeadline.textContent = "Inquiry Lodged";
        successMessage.textContent = "Your collaboration request has been transmitted securely. The VC Studios crew will review your specification targets shortly.";
      } else if (activeModalType === "learn-more") {
        successHeadline.textContent = "Specs Dispatched";
        successMessage.textContent = `The official ${currentItemDetail} capabilities brochure has been securely compiled and dispatched directly to your creative inbox.`;
      }
    }, 1500);
  }

  // Form submit binders
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = formLogin.querySelector("button[type='submit']");
      showFormLoading(formLogin, submitBtn);
    });
  }

  if (formContact) {
    formContact.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = formContact.querySelector("button[type='submit']");
      showFormLoading(formContact, submitBtn);
    });
  }

  // Capabilities download click binder
  if (learnMoreSubmitBtn) {
    learnMoreSubmitBtn.addEventListener("click", () => {
      showFormLoading(viewLearnMore, learnMoreSubmitBtn);
    });
  }

});
