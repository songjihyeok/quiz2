import { useEffect, useState } from 'react';

interface BannerProps {
	loading: boolean;
	error: boolean;
	src: string | undefined;
}

const useBanner = (path: string): BannerProps => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [src, setSrc] = useState<string>();

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(`@src/assets/images/pages/${path}/bg_top.jpg`);
				setSrc(response.default);
			} catch (error: unknown) {
				setError(!!error);
			} finally {
				setLoading(false);
			}
		};

		fetchImage();
		return () => {
			setLoading(true);
			setError(false);
			setSrc(undefined);
		};
	}, [path]);

	return {
		loading,
		error,
		src,
	};
};

export default useBanner;
