/* service popup*/
function myFunction() 
{
  	var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

/* quantity */
document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const quantityDisplay = document.getElementById('quantity');

    let quantity = 1;

    decrementButton.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    incrementButton.addEventListener('click', function() {
        if (quantity < 5) {
            quantity++;
            quantityDisplay.textContent = quantity;
        } else {
            alert("Maximum quantity of 5 reached.");
        }
    });
});

/* follow button */
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.productsFlw');

    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
        alert("Thank you for following us!");
    });
 });

/* hydragloss */
document.addEventListener('DOMContentLoaded', (event) => {
    const hydraglossDecrementButton = document.getElementById('hydragloss-decrement');
    const hydraglossIncrementButton = document.getElementById('hydragloss-increment');
    const hydraglossQuantityDisplay = document.getElementById('hydragloss-quantity');
    const hydraglossAddToCartButton = document.getElementById('hydragloss-add-to-cart');
    const hydraglossShadeButtons = document.querySelectorAll('.lippiesShadesBtn');

    let hydraglossQuantity = parseInt(hydraglossQuantityDisplay.textContent);
    let selectedHydraglossShade = 'Afterglow';

    hydraglossShadeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedHydraglossShade = button.id.split('-')[1];
            	hydraglossShadeButtons.forEach(btn => {
                	btn.style.border = 'none';
               		btn.style.borderRadius = '10%';
                    btn.style.backgroundColor = '';
               	});
                button.style.border = '2px solid #694E52';
                button.style.backgroundColor = '#F1E2DC';
            });
        });

    hydraglossDecrementButton.addEventListener('click', () => {
        if (hydraglossQuantity > 1) {
            hydraglossQuantity--;
            hydraglossQuantityDisplay.textContent = hydraglossQuantity;
        }
    });

    hydraglossIncrementButton.addEventListener('click', () => {
        hydraglossQuantity++;
        hydraglossQuantityDisplay.textContent = hydraglossQuantity;
    });

    hydraglossAddToCartButton.addEventListener('click', () => {
        const product = {
           name: 'Hydragloss',
            price: 299,
            shade: selectedHydraglossShade,
            quantity: hydraglossQuantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productIndex = cart.findIndex(item => item.name === product.name && item.shade === product.shade);

        if (productIndex !== -1) {
           	cart[productIndex].quantity += hydraglossQuantity;
       	} else {
         	cart.push(product);
      	}

      	localStorage.setItem('cart', JSON.stringify(cart));
      	alert('Product added to cart!');
  	});
});

// Lip Bullet functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const lipBulletDecrementButton = document.getElementById('lipBullet-decrement');
    const lipBulletIncrementButton = document.getElementById('lipBullet-increment');
    const lipBulletQuantityDisplay = document.getElementById('lipBullet-quantity');
    const lipBulletAddToCartButton = document.getElementById('lipBullet-add-to-cart');
    const lipBulletShadeButtons = document.querySelectorAll('.lippiesShadesBtn');

    let lipBulletQuantity = parseInt(lipBulletQuantityDisplay.textContent);
    let selectedLipBulletShade = 'BadBlood';

    lipBulletShadeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedLipBulletShade = button.id.split('-')[1];
            lipBulletShadeButtons.forEach(btn => {
                btn.style.border = 'none';
                btn.style.borderRadius = '10%';
                btn.style.backgroundColor = '';
            });
            button.style.border = '2px solid #694E52';
            button.style.backgroundColor = '#F1E2DC';
        });
    });

    lipBulletDecrementButton.addEventListener('click', () => {
        if (lipBulletQuantity > 1) {
            lipBulletQuantity--;
            lipBulletQuantityDisplay.textContent = lipBulletQuantity;
        }
    });

    lipBulletIncrementButton.addEventListener('click', () => {
        lipBulletQuantity++;
        lipBulletQuantityDisplay.textContent = lipBulletQuantity;
    });

    lipBulletAddToCartButton.addEventListener('click', () => {
        const product = {
            name: 'LipBullet',
            price: 249,
            shade: selectedLipBulletShade,
            quantity: lipBulletQuantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productIndex = cart.findIndex(item => item.name === product.name && item.shade === product.shade);

        if (productIndex !== -1) {
            cart[productIndex].quantity += lipBulletQuantity;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    });
});

//Lip Cloud
document.addEventListener('DOMContentLoaded', (event) => {
    const lipCloudDecrementButton = document.getElementById('lipCloud-decrement');
    const lipCloudIncrementButton = document.getElementById('lipCloud-increment');
    const lipCloudQuantityDisplay = document.getElementById('lipCloud-quantity');
    const lipCloudAddToCartButton = document.getElementById('lipCloud-add-to-cart');
    const lipCloudShadeButtons = document.querySelectorAll('.lippiesShadesBtn');

    let lipCloudQuantity = parseInt(lipCloudQuantityDisplay.textContent);
    let selectedLipCloudShade = 'Dreamy';

    lipCloudShadeButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedLipCloudShade = button.id.split('-')[1];
            lipCloudShadeButtons.forEach(btn => {
                btn.style.border = 'none';
                btn.style.borderRadius = '10%';
                btn.style.backgroundColor = '';
            });
            button.style.border = '2px solid #694E52';
            button.style.backgroundColor = '#F1E2DC';
        });
    });

    lipCloudDecrementButton.addEventListener('click', () => {
        if (lipCloudQuantity > 1) {
            lipCloudQuantity--;
            lipCloudQuantityDisplay.textContent = lipCloudQuantity;
        }
    });

    lipCloudIncrementButton.addEventListener('click', () => {
        lipCloudQuantity++;
        lipCloudQuantityDisplay.textContent = lipCloudQuantity;
    });

    lipCloudAddToCartButton.addEventListener('click', () => {
        const product = {
            name: 'LipCloud',
            price: 269,
            shade: selectedLipCloudShade,
            quantity: lipCloudQuantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productIndex = cart.findIndex(item => item.name === product.name && item.shade === product.shade);

        if (productIndex !== -1) {
            cart[productIndex].quantity += lipCloudQuantity;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    });
});


//cart
document.addEventListener('DOMContentLoaded', (event) => {
    const cartContents = document.getElementById('cartContents');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCart() {
        const cartItems = document.getElementById('cart-items');
        const totalPrice = document.getElementById('total-price');
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartContents.innerHTML = '<p>Your cart is empty.</p>';
            totalPrice.textContent = '';
        } else {
            let cartHTML = '';
            let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTot
            cartHTML += `<tr>
               	<td>${item.name}</td>
               	<td>${item.shade}</td>
               	<td>₱${item.price.toFixed(2)}</td>
               	<td>${item.quantity}</td>
               	<td>₱${itemTotal.toFixed(2)}</td>
               	<td><button class="remove-button" data-index="${index}">Remove</button></td>
           	</tr>`;	
        });

        cartItems.innerHTML = cartHTML;
        totalPrice.textContent = `Total: ₱${total.toFixed(2)}`;

        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCart();
            });
        });
		displayCart();

		cart.forEach(item => {
    		checkoutURL += `${item.quantity}x ${item.name} (${item.shade}) ₱${(item.price * item.quantity).toFixed(2)}&`;
		});

		checkoutURL = checkoutURL.slice(0, -1);
		window.location.href = checkoutURL;
	}
}

//checkout
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const orderReviewContainer = document.getElementById('order-review');
    const billingForm = document.getElementById('billing-form');
    const shippingMethodRadioButtons = document.getElementsByName('shippingMethod');
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const calculateTotal = () => {
        let shippingFee = 0;

        shippingMethodRadioButtons.forEach(button => {
            if (button.checked) {
                const shippingMethod = button.value;
                // Extract shipping fee from the shipping method value
                shippingFee = parseFloat(shippingMethod.split(' - ')[1].replace('₱', ''));
            }
        });

        const total = subtotal + shippingFee;

        const orderReviewHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${cartItems.map(item => `
                        <tr>
                            <td>${item.quantity}x ${item.name} (${item.shade})</td>
                            <td>₱${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                    <tr><td colspan="2">&nbsp;</td></tr>
                    <tr>
                        <td><b>Subtotal</b></td>
                        <td><b>₱${subtotal.toFixed(2)}</b></td>
                    </tr>
                    <tr>
                        <td><b>Shipping Fee</b></td>
                        <td><b>₱${shippingFee.toFixed(2)}</b></td>
                    </tr>
                    <tr>
                        <td><b>Total</b></td>
                        <td><b>₱${total.toFixed(2)}</b></td>
                    </tr>
                </tbody>
            </table>
        `;

        orderReviewContainer.innerHTML = orderReviewHTML;
        return { subtotal, shippingFee, total };
    };

    calculateTotal();

    shippingMethodRadioButtons.forEach(button => {
        button.addEventListener('change', calculateTotal);
    });

    billingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const requiredInputs = document.querySelectorAll('#billing-form [required]');
    let incomplete = false;
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            incomplete = true;
        }
    });

    if (incomplete) {
        alert('Incomplete details. Please fill in all required fields.');
        return; // Stop further execution
    }
        // Display thank you message
        alert('Thank you for your purchase!');
        
        // Clear cart
        localStorage.removeItem('cart');
        
        // Redirect to cart page
        window.location.href = 'cart.html';
    });
});


// header - search
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-submit');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();

        switch(query) {
            case 'hydragloss':
                window.location.href = 'hydragloss.html';
                break;
            case 'lip bullet':
                window.location.href = 'lipBullet.html';
                break;
            case 'lip cloud':
                window.location.href = 'lipCloud.html';
                break;
            default:
                alert("I'm sorry, we do not have that product.");
                break;
        }
    });
});

//home - audio
window.onload = function() {
	var audio = document.getElementById('background-audio');
	audio.play();
} 

//account
document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Welcome to Lailey&Co.!');
        window.location.href = 'home.html'
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('You\'ve successfully created an account.');
        window.location.href = 'home.html'
    });
});