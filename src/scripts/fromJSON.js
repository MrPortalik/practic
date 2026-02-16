export function fromJSON() {
    // import data from './../data/data.json';
    const data = {
        section: {
            head: 'content'
        }
    };
    deeper(data);
    let node = document.querySelector('body');

    function deeper(array) {
        // if (element)

        array.forEach(element => {
            console.log(element);
            
            node.appendChild(document.createElement(element));
            temp = node;
            if (element.isArray()) {
                node = node.lastChild;
                deeper(element);
            }
            node = temp;
        });
    }
    
}