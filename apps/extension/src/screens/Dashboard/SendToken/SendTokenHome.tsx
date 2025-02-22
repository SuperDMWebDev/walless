import { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from '@walless/ui';

import CollectiblesView from './CollectiblesView';
import Header from './Header';
import TokensView from './TokensView';

interface Props {
	handleCloseModal: () => void;
}

const SendTokenHome: FC<Props> = ({ handleCloseModal }) => {
	const [isTokensTab, setIsTokensTab] = useState(true);
	return (
		<>
			<Header
				title="Send"
				returnLink="/send-token"
				handleCloseModal={handleCloseModal}
				className="mt-5"
			/>

			<View className="flex flex-row gap-3">
				<Text
					className={`w-[100px] h-5 text-right ${
						isTokensTab && 'font-semibold text-[#2FA1D9]'
					}`}
				>
					Tokens
				</Text>
				<TouchableOpacity
					className="bg-[#001E32] w-12 h-5 border border-[#38576B80] rounded-md p-[3px] flex"
					onPress={() => setIsTokensTab((prev) => !prev)}
				>
					<View
						className={`bg-gradient-to-r from-[#1FA1D9] to-[#72BBC4] w-5 h-3 rounded transition ${
							!isTokensTab && 'translate-x-full'
						}`}
					/>
				</TouchableOpacity>
				<Text
					className={`w-[100px] h-5 ${
						!isTokensTab && 'font-semibold text-[#2FA1D9]'
					}`}
				>
					Collectibles
				</Text>
			</View>

			{isTokensTab ? <TokensView className="grow" /> : <CollectiblesView />}
		</>
	);
};

export default SendTokenHome;
