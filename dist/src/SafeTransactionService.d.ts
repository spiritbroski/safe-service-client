import { Signer } from '@ethersproject/abstract-signer';
import { SafeMultisigConfirmationListResponse, SafeMultisigTransactionResponse } from '@safe-global/safe-core-sdk-types';
import { MasterCopyResponse, OwnerResponse, ProposeTransactionProps, SafeBalanceResponse, SafeBalancesOptions, SafeBalancesUsdOptions, SafeBalanceUsdResponse, SafeCollectibleListResponse, SafeCollectiblesOptions, SafeCreationInfoResponse, SafeDelegate, SafeDelegateConfig, SafeDelegateDeleteConfig, SafeDelegateListResponse, SafeInfoResponse, SafeModuleTransactionListResponse, SafeMultisigTransactionEstimate, SafeMultisigTransactionEstimateResponse, SafeMultisigTransactionListResponse, SafeServiceInfoResponse, SignatureResponse, TokenInfoListResponse, TokenInfoResponse, TransferListResponse } from './types/safeTransactionServiceTypes';
interface SafeTransactionService {
    getServiceInfo(): Promise<SafeServiceInfoResponse>;
    getServiceMasterCopiesInfo(): Promise<MasterCopyResponse[]>;
    decodeData(data: string): Promise<any>;
    getSafesByOwner(ownerAddress: string): Promise<OwnerResponse>;
    getTransaction(safeTxHash: string): Promise<SafeMultisigTransactionResponse>;
    getTransactionConfirmations(safeTxHash: string): Promise<SafeMultisigConfirmationListResponse>;
    confirmTransaction(safeTxHash: string, signature: string): Promise<SignatureResponse>;
    getSafeInfo(safeAddress: string): Promise<SafeInfoResponse>;
    getSafeDelegates(safeAddress: string): Promise<SafeDelegateListResponse>;
    addSafeDelegate(config: SafeDelegateConfig): Promise<SafeDelegate>;
    removeSafeDelegate(config: SafeDelegateDeleteConfig): Promise<void>;
    removeAllSafeDelegates(safeAddress: string, signer: Signer): Promise<void>;
    getSafeCreationInfo(safeAddress: string): Promise<SafeCreationInfoResponse>;
    estimateSafeTransaction(safeAddress: string, safeTransaction: SafeMultisigTransactionEstimate): Promise<SafeMultisigTransactionEstimateResponse>;
    proposeTransaction({ safeAddress, senderAddress, safeTransactionData, senderSignature, safeTxHash, origin }: ProposeTransactionProps): Promise<void>;
    getIncomingTransactions(safeAddress: string): Promise<TransferListResponse>;
    getModuleTransactions(safeAddress: string): Promise<SafeModuleTransactionListResponse>;
    getMultisigTransactions(safeAddress: string): Promise<SafeMultisigTransactionListResponse>;
    getPendingTransactions(safeAddress: string, currentNonce?: number): Promise<SafeMultisigTransactionListResponse>;
    getNextNonce(safeAddress: string): Promise<number>;
    getBalances(safeAddress: string, options?: SafeBalancesOptions): Promise<SafeBalanceResponse[]>;
    getUsdBalances(safeAddress: string, options?: SafeBalancesUsdOptions): Promise<SafeBalanceUsdResponse[]>;
    getCollectibles(safeAddress: string, options?: SafeCollectiblesOptions): Promise<SafeCollectibleListResponse>;
    getTokenList(): Promise<TokenInfoListResponse>;
    getToken(tokenAddress: string): Promise<TokenInfoResponse>;
}
export default SafeTransactionService;
