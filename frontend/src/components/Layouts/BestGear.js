import { memo } from 'react';
// CSS
import './BestGear.scss';

function BestGear() {
	return (
		<section id='best-gear'>
			<article className='grid best-gear__container'>
				<div>
					<h2>
						Bringing you the <span>best</span> audio gear
					</h2>
					<p className='opacity-5'>
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
				<div></div>
			</article>
		</section>
	);
}
export default memo(BestGear);
