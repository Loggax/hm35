let dataItem = [];
let filterArr = [];
const container = document.querySelector('.container');
const filterList = document.querySelector('.filter-list');
filterList.addEventListener('click', (e) => {
    const item = e.target.closest('li');
    if(item) {
        filter(item);
    }
});
container.addEventListener('click', (event) => {
    const block = event.target.closest('.product-block');
    if(block) {
        console.log(block.dataset.id);
    }
})
load();

function load() {
    fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
        dataItem = data.products;

        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
        let list = [];

        const tempArray = filterArr.sort();

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i + 1] !== tempArray[i]) {
                list.push(tempArray[i]);
            }
        }

        list.map((list) => {
            const listItem = `<li>${list}</li>`;
            filterList.insertAdjacentHTML('beforeend', listItem);
        });

        console.log(data.products);

        let imgHolder = document.querySelector('.img-holder');
        let descBlock = document.querySelector('.desc-block')

        container.addEventListener('click', (event) => {
            console.log("it's working");
            const block = event.target.closest('.product-block');

            for (let i = 0; i <= data.products.length; i++) {
                if (block.dataset.id == data.products[i].id) {
                    container.style.display = "none";
                    const desc = `
                     <h2>title: Category: ${data.products[i].category}</h2>
                     <h2>brand: Brand: ${data.products[i].brand}</h2>
                    <h2>description: ${data.products[i].description}</h2>
                     <h2>price: ${data.products[i].price}</h2>
                    <h2>stock: ${data.products[i].stock}</h2>
                 `;
                descBlock.insertAdjacentHTML('beforeend', desc);
                }
            }

        });

    }).catch((error) => console.log(error));
}

function filter(item) {
    const cat = item.textContent;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    if (cat != 'all') {
        dataItem.map((item) => {
            console.log(item);
            if (item.category == cat) {
                const product = `
                <div class="product-block">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
                container.insertAdjacentHTML('beforeend', product);
            }
        });
    } else {
        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
    }
}

// let imgHolder = document.querySelector('.img-holder');
// let descBlock = document.querySelector('.desc-block')

// container.addEventListener('click', (event) => {
//     console.log("it's working");
//     const block = event.target.closest('.product-block');
//     if (block.dataset.id == 1) {
//         container.style.display = "none";
//         // contentHolder.style.display = "none";
//         const desc = `
//             <h2>title: Iphone 9</h2>
//             <h2>brand: Apple</h2>
//             <h2>description: An apple mobile which is nothing like apple</h2>
//             <h2>price: 549$</h2>
//             <h2>stock: 94</h2>
//         `;
//         descBlock.insertAdjacentHTML('beforeend', desc);
//     }
// });

// console.log(data.products);

/*function load() {
    fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
       
        // console.log(data.products[0].id);
        // data.products.forEach(item => {
        //     if (id == item.id) {
        //         const structure = `
        //             <div class="product-block-modal" data-id="${item.id}">
        //                 <div class="img-holder-modal">
        //                     <img src="${item.images[0]}" alt="">
        //                 </div>
        //                 <div class="info-modal">
        //                     <h3>${item.brand}</h3>
        //                     <strong>${item.price} $</strong>
        //                     <p class="description-modal">${item.description}</p>
        //                 </div>
        //             </div>
        //             `;
        //         modal.insertAdjacentHTML('beforeend', structure);
        //     };
        // })  

        // data.products.forEach(item =>)

        console.log(data.products.length);

        container.addEventListener('click', (event) => {

        for(let i = 0; i <= data.products.length; i++) {
            const block = event.target.closest('.product-block');
            console.log(block.dataset.id);
            if (data.products[i].id == 1) {

                console.log('vu vubralu tovar');
            }
        }
    });
      
    })
}*/

