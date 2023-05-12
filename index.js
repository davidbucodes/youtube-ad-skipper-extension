function addLocationObserver(callback) {
  const config = { attributes: false, childList: true, subtree: false };
  const observer = new MutationObserver(callback);
  observer.observe(document.body, config);
}

addLocationObserver(skipAd);

setInterval(() => {
  skipAd();
}, 500 * 5);

function skipAd() {
  let skipButton = document.getElementsByClassName("ytp-ad-skip-button");
  const retriesLeft = 500;
  while (!skipButton && retriesLeft) {
    retriesLeft--;
    setTimeout(() => {
      skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    }, 5);
  }
  if (skipButton?.[0]) {
    skipButton?.[0]?.click();
    console.log("Skipped");
  } else {
    console.error("No skip ad button identified");
  }
}
