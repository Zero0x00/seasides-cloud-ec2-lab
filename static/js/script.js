// Smooth scrolling for anchor links in the navigation menu
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
// AWS_ACCESS_KEY_ID=ASIIAMFAKENOPZLX6J5L
// AWS_SECRET_ACCESS_KEY=w0pE4j5k4FlUrkIIAMFAKEdiLMKLGZlxyct+GpTam
// AWS_SESSION_TOKEN=FQoGZXIvYXdzEDwaIIAMFAKEn0LVImWNQHiLuAWKe+KFkLeIvpOHEruWjyCjrEdyjtW8WCbnmJGM1ES20xq1fcaS5TERHDUabZJ60Kk6nc9uHoCDb1QKHi+MerRIcKJTi3OKz0QMVPAGVqVWgvOBBSQ2lylLVjtMMSQF+yLZsP1bvehQ0ke/Bl/X6RJySOHg2TZGyESPL/INqJiZyEHi+MelAnThepVgWUKFPD5mESBVlpy2LVCE3xPpHFqOm0Q79svRSSW2jLj5NkRXL+xhkcvt+g8vNt1ODEwixwMGpFB2sBHryv6EXNeX6c88vxJ8Zyfkmsqi0xmCW1f9jWAPIXNkt/nEYW4J4coyLKP7QU=
// AWS_DEFAULT_REGION=us-east-2
