import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<section>
				<ul>
					<li>
						<a href="https://facebook.com/">
							<img src="/images/fb.png" />
						</a>
					</li>
					<li>
						<a href="https://x.com/">
							<img src="/images/tw.png" />
						</a>
					</li>
					<li>
						<a href="https://instagram.com/">
							<img src="/images/ig.png" />
						</a>
					</li>
				</ul>
			</section>
			<section>
				<img src="/images/logo.png" />
			</section>
			<section>
				<p>Desenvolvido por Alura.</p>
			</section>
		</footer>
	);
};

export default Footer;
