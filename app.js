class Product {
    constructor(name, marca, precio, codigo, stock) {
        this.name = name;
        this.marca = marca;
        this.precio = precio;
        this.codigo = codigo;
        this.stock = stock;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto</strong>: ${product.name}
                <strong> Marca</strong>: ${product.marca}
                <strong> Precio</strong>: ${product.precio}
                <strong> Codigo</strong>: ${product.codigo}
                <strong> Cantidad</strong>: ${product.stock}
                <a href="#" class="badge badge-pill badge-danger" name="delete">Eliminar</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
        this.resetFrom();
    }

    resetFrom() {
        document.getElementById('product-from').reset();

    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            if (confirm('Seguro de Borrrarlo?')) {
                element.parentElement.parentElement.parentElement.remove();
                this.showMessage('Producto Eliminado', 'danger');
            };
        }
    }

    showMessage(mensaje, tipoClass) {
        const div = document.createElement('div');
        div.className = `alert alert-dismissible alert-${tipoClass} text-center `;
        div.style = 'position: absolute; z-index: 10; width: 100%; margin-right:10%; margin-left: 10%;';
        div.appendChild(document.createTextNode(mensaje));
        // Mostrar en la paguina
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

// Eventos de DOM (Document Event Model)

document.getElementById("product-from").addEventListener('submit', function(e) {
    const nombre = document.getElementById('name').value;
    const marca = document.getElementById('marca').value;
    const codigo = document.getElementById('code').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('stock').value;
    const product = new Product(nombre, marca, precio, codigo, cantidad);
    const ui = new UI();
    if (nombre != '' & marca != '' & precio != '' & codigo != '' & cantidad != '') {
        ui.addProduct(product);
        ui.showMessage('Producto Agregado', 'success');
        e.preventDefault();
    } else {
        ui.showMessage('LLene todos los campos', 'info');
    }

});


// Eliminar Producto
document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});