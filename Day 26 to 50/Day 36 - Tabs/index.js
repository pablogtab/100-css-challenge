let selectedTab = 1;

const changeTab = (tabNumber) => {
    if (tabNumber !== selectedTab) {
        let previousTab = selectedTab
        selectedTab = tabNumber;
        let previousTabEl = document.getElementById('tab-' + previousTab)
        let selectedTabEl = document.getElementById('tab-' + selectedTab)
        let contentPreviousTabEl = document.getElementById('content-tab-' + previousTab)
        let contentSelectedTabEl = document.getElementById('content-tab-' + selectedTab)
        previousTabEl.classList.toggle('selected')
        selectedTabEl.classList.toggle('selected')
        contentPreviousTabEl.classList.toggle('selected')
        contentSelectedTabEl.classList.toggle('selected')
    }
}