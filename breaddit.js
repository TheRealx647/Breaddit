javascript:(function() {
  var currentUrl = window.location.href;

  var dropdown = document.createElement('select');
  dropdown.id = 'myDropdown';
  if (RegExp('www\\.reddit\\.com/r/.+/comments/').test(currentUrl)) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to Old Reddit', currentUrl.replace('www.reddit.com', 'old.reddit.com')));
    dropdown.options.add(new Option('View on Unddit', currentUrl.replace('www.reddit.com', 'www.unddit.com')));
    dropdown.options.add(new Option('Archive Page', 'https://archive.is/submit/?url=' + encodeURIComponent(currentUrl)));
    var pginfo = 'Reddit Post'

  } else if (RegExp('www\\.reddit\\.com/user/.+/').test(currentUrl)) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to Old Reddit', currentUrl.replace('www.reddit.com', 'old.reddit.com')));
    dropdown.options.add(new Option('Archive Page', 'https://archive.is/submit/?url=' + encodeURIComponent(currentUrl)));
    var pginfo = 'Reddit User Profile'

  } else if (RegExp('new\\.reddit\\.com/user/.+/').test(currentUrl)) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to Old Reddit', currentUrl.replace('new.reddit.com', 'old.reddit.com')));
    dropdown.options.add(new Option('Archive Page (May take awhile)', 'https://archive.is/submit/?url=' + encodeURIComponent(currentUrl)));
    var pginfo = 'Reddit User Profile'

  } else if (RegExp('old\\.reddit\\.com/user/.+/').test(currentUrl)) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to New Reddit', currentUrl.replace('old.reddit.com', 'www.reddit.com')));
    dropdown.options.add(new Option('Archive Page (May take awhile)', 'https://archive.is/submit/?url=' + encodeURIComponent(currentUrl)));
    var pginfo = 'old.Reddit User Profile'
  
  } else if (RegExp('old\\.reddit\\.com/r/.+/comments/').test(currentUrl)) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to New Reddit', currentUrl.replace('old.reddit.com', 'www.reddit.com')));
    dropdown.options.add(new Option('View on Unddit', currentUrl.replace('old.reddit.com', 'www.unddit.com')));
    dropdown.options.add(new Option('Archive Page', 'https://archive.is/submit/?url=' + encodeURIComponent(currentUrl)));
    var pginfo = 'old.Reddit Post'
 
  } else if (currentUrl.includes('old.reddit.com')) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to New Reddit', currentUrl.replace('old.reddit.com', 'www.reddit.com')));
    var pginfo = 'old.Reddit'

  } else if (currentUrl.includes('www.reddit.com')) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to Old Reddit', currentUrl.replace('www.reddit.com', 'old.reddit.com')));
    var pginfo = 'Reddit'

  } else if (currentUrl.includes('www.unddit.com')) {
    dropdown.options.add(new Option('- Choose an Option -'));
    dropdown.options.add(new Option('Switch to New Reddit', currentUrl.replace('www.unddit.com', 'www.reddit.com')));
    dropdown.options.add(new Option('Switch to Old Reddit', currentUrl.replace('www.unddit.com', 'old.reddit.com')));
    dropdown.options.add(new Option('Archive Page', 'https://archive.is/submit/?url=' + encodeURIComponent(currentUrl)));
    var pginfo = 'Unddit Page'

  } else {
    alert("This page not valid for this bookmarklet");
    return;
  }
  dropdown.onchange = function() {
    var selectedValue = this.value;
    if (selectedValue !== '') {
      window.location.href = selectedValue;
    }
  };
  
  var label = document.createElement('label');
  label.innerHTML = 'Breaddit: ';
  label.appendChild(dropdown);
  var closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  closeButton.style.float = 'right';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '1%';
  closeButton.style.left = '94%';
  closeButton.style.padding = '2px';
  closeButton.style.fontSize = 'auto';
  closeButton.style.borderRadius = '20%';
  closeButton.onclick = function() {
    container.style.display = 'none';
  };
  label.appendChild(closeButton);
  var container = document.createElement('div');
  container.appendChild(label);
  container.style.position = 'fixed';
  container.style.top = '5%';
  container.style.left = '40%';
  container.style.width = 'auto';
  container.style.height = 'auto';
  container.style.zIndex = '9999';
  container.style.background = '#fff';
  container.style.border = '4px double #FF4500';
  container.style.padding = '18px';
  container.style.fontSize = 'auto';
  document.body.appendChild(container);
  var pageInfoLabel = document.createElement('label');
  pageInfoLabel.innerHTML = (pginfo);
  pageInfoLabel.style.float = 'left';
  pageInfoLabel.style.position = 'absolute';
  pageInfoLabel.style.top = '1%';
  pageInfoLabel.style.left = '6%';
  pageInfoLabel.style.padding = '2px';
  pageInfoLabel.style.fontSize = '10px';
  pageInfoLabel.style.display = 'none';
  label.appendChild(pageInfoLabel);
})();

  var label = document.createElement('label');
  label.innerHTML = 'Breaddit: ';
  label.appendChild(dropdown);
  
  var pageInfoLabel = document.createElement('label');
  pageInfoLabel.innerHTML = 'Page Info: ' + window.location.href;
  pageInfoLabel.style.marginLeft = '10px';
  
  var closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  closeButton.style.float = 'right';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '1%';
  closeButton.style.left = '94%';
  closeButton.style.padding = '2px';
  closeButton.style.fontSize = 'auto';
  closeButton.style.borderRadius = '20%';
  closeButton.onclick = function() {
      container.style.display = 'none';
  };
