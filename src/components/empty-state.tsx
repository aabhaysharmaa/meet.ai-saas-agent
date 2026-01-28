
interface props {
	title: string;
	description: string
}

import Image from 'next/image';

export const EmptyState = ({ title, description }: props) => {
	return (
		<div className='flex flex-col  items-center justify-center'>
			<Image src={"/empty.svg"} width={240} alt='Empty' height={240} />
			<div className="flex flex-col gap-y-6 mx-auto text-center">
				<h6 className='text-lg font-medium'>{title}</h6>
				<p className='text-sm text-muted-foreground'>{description}</p>
			</div>
		</div>
	)
}
