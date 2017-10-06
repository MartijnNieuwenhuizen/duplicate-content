function getAllNodes(rootNode) {
    var nodeIterator = document.createNodeIterator(rootNode, NodeFilter.SHOW_TEXT);
    var nodes = [];
    var currentNode;
    while (currentNode = nodeIterator.nextNode()) {
        nodes.push(currentNode);
    }
    return nodes;
}

function duplicate() {
    var textNodes = getAllNodes(document);
    for (var i = 0; i < textNodes.length; i++) {
        textNodes[i].nodeValue += textNodes[i].nodeValue;
    }
}

chrome.runtime.onMessage.addListener(function(request) {
    request.action === "duplicate" ? duplicate() : '';
});
