import { useOnlineEffect } from 'react-detect-offline';

export function One() {
	useOnlineEffect(online => console.log('fired One', online), {
        enabled: true,
		timeout: 5000,
		interval: 15000,
	});
	return <div>Hello One</div>;
}