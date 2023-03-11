import { ImageSourcePropType } from 'react-native';
import { proxy } from 'valtio';

import { generateHash } from './helper';
import { LayoutProxy } from './type';

export const layoutProxy: LayoutProxy = proxy({});

export const layoutActions = {
	addLayout: (
		id: string,
		name: string,
		icon: ImageSourcePropType,
		projectLayout: React.FC,
	) => {
		const hashKey = generateHash(id);

		if (layoutProxy[hashKey]) {
			return;
		}

		layoutProxy[hashKey] = {
			id,
			name,
			icon,
			projectLayout,
		};
	},
	removeLayout: (id: string) => {
		const hashKey = generateHash(id);

		if (!layoutProxy[hashKey]) {
			return;
		}

		delete layoutProxy[hashKey];
	},
};

export * from './helper';
export * from './type';
