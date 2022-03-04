export type Transaction = {
    hash: string,
    height: number,
    time: string,
    type: string,
    chain_id: string,
    num_relays: number,
    pokt_per_relay: number,
    pokt_amount: number,
    session_height: number,
    expire_height: number,
    app_pubkey: string,
    is_confirmed?: boolean,
}