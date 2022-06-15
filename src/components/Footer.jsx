const Footer = () => {

    document.querySelector('#newsletter').addEventListener('submit', (e) => {
        e.preventDefault()
        alert('GRACIAS POR SUSCRIBIRTE A NUESTRO NEWSLETTER')
    })

    return (
        <footer class="swiper-slide">
            {/* newsletter */}
            <div class="newsletter">
                <span>Suscribite a nuestro Newsletter!</span>

                <form id="newsletter">
                    <input type="email" placeholder="ejemplo@gmail.com" required></input>
                    <button type="submit">Suscribirse</button>
                </form>
            </div>

            {/* redes sociales */}
            <div class="social">
                <div class="redes">
                    <div class="icon facebook">
                        <div class="tooltip">Facebook</div>
                        <i class="fab fa-facebook-f"></i>
                    </div>

                    <div class="icon twitter">
                        <div class="tooltip">Twitter</div>
                        <i class="fab fa-twitter"></i>
                    </div>

                    <div class="icon instagram">
                        <div class="tooltip">Instagram</div>
                        <i class="fab fa-instagram"></i>
                    </div>

                    <div class="icon github">
                        <div class="tooltip">Github</div>
                        <span><i class="fab fa-github"></i></span>
                    </div>

                    <div class="icon youtube">
                        <div class="tooltip">Youtube</div>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>

                <span>Nuestras redes</span>
            </div>
        </footer>
    )
}

export default Footer