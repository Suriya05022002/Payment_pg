

        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const toggle = element.querySelector('.faq-toggle');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.classList.remove('active');
                }
            });
            
            document.querySelectorAll('.faq-toggle').forEach(item => {
                if (item !== toggle) {
                    item.classList.remove('active');
                    item.textContent = '+';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('active');
            toggle.classList.toggle('active');
            toggle.textContent = toggle.classList.contains('active') ? '×' : '+';
        }

        function proceedToPayment(plan, amount) {
            // Store selected plan details
            localStorage.setItem('selectedPlan', JSON.stringify({
                plan: plan,
                amount: amount,
                planName: plan === 'basic' ? 'Career Starter Pack' : 'Career Pro Pack + Interview Mastery'
            }));
            
            // Show confirmation
            if (confirm(`Proceed to payment for ${plan === 'basic' ? 'Basic' : 'Premium'} Plan (₹${amount})?`)) {
                // Here you would typically redirect to payment gateway
                // For demo purposes, we'll show an alert
                alert(`Redirecting to payment gateway for ₹${amount}...`);
                
                // In a real implementation, you would redirect to:
                // - Razorpay
                // - Stripe
                // - PayPal
                // - Or your preferred payment gateway
                
                // Example redirect (uncomment and modify as needed):
                // window.location.href = `/payment?plan=${plan}&amount=${amount}`;
            }
        }

        // Add smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add loading animation for buttons
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = 'Processing...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            });
        });
   
