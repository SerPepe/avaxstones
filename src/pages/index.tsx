import dayjs from 'dayjs'
import useCountDown from 'react-countdown-hook'
import prettyMilliseconds from 'pretty-ms'
import { useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import Web3 from 'web3'
import abi from '../data/abi.json'
import TokenViewer from '../components/TokenViewer'

const date1 = dayjs('2023-08-10T19:00:00-04:00')
const date2 = dayjs(Date.now())

const initialTime = date1.diff(date2)
const interval = 100

export default function IndexPage() {
    const wallet = useWallet()

    const [status, setStatus] = useState('idle')

    const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval)

    useEffect(() => start(), [])

    const web3 = new Web3(wallet.ethereum)
    const contract = new web3.eth.Contract(abi as any, `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`)

    const buyRocks = async (amount = 0) => {
        setStatus('loading')
        try {
            if (!wallet.account) return wallet.connect()

            await contract.methods.buyRocks(amount).estimateGas({ from: wallet.account, value: web3.utils.toWei((10 * amount).toString()) })

            await contract.methods.buyRocks(amount).send({ from: wallet.account, value: web3.utils.toWei((10 * amount).toString()) })
            setStatus('complete')
            // 12
        } catch (error) {
            setStatus('error')
            console.log(error)
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-6 md:p-12 font-mono">
            <div className="space-y-8">
                <div className="space-y-1">
                    <p>Introducing</p>
                    <p className="text-2xl font-bold">Fren Badge</p>
                    <p className="text-xs opacity-50"></p>
                </div>

                <div className="md:max-w-3xl space-y-1">
                    <p className="text-2xl">Fren.fi Presents</p>
                    <p className="text-4xl md:text-5xl font-bold">Limited Edition "FrenBadge" NFTs</p>
                    <p></p>
                </div>

                <div className="text-sm">
                    {'Perks Included With FrenBadge:'}
                    <br />
                    <br />
                    <div className="text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                            />
                        </svg>
                        <span className="text-green-400">Free Twitter Blue</span>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                            />
                        </svg>
                        <span className="text-green-400">Gold FrenBadge Checkmark</span>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                            />
                        </svg>
                        <span className="text-green-400">VIP Alpha Groupchat</span>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                            />
                        </svg>
                        <span className="text-green-400">Free IRL Stickers</span>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                            />
                        </svg>
                        <span className="text-green-400">100% Fee Refund Accured on Fren Finance</span>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                            />
                        </svg>
                        <span className="text-green-400">$FREN Bonus Airdrop</span>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                            />
                        </svg>
                        <span className="text-green-400">& More VIP Rewards only for FrenBadge holders!</span>
                    </div>
                </div>

                <div>
                    <p className="text-lg">Only 100 Fren Badges will be minted on Mantle.</p>
                </div>

                <div className="space-y-1">
                    <p>~100 badges available at 125 MNT each.</p>
                    <p className="text-3xl font-bold">{prettyMilliseconds(timeLeft)}</p>
                </div>

                <div className="space-y-2">
                    <p className="text-xs text-right opacity-50">{wallet.account ? `Connected as ${wallet.account.slice(0, 6)}...${wallet.account.slice(-6)}.` : 'Wallet not connected.'}</p>

                    {!wallet.account && (
                        <button onClick={buyRocks} type="button" className="bg-white text-black rounded w-full p-4 text-xl">
                            Connect Wallet
                        </button>
                    )}

                    {wallet.account && (
                        <div className="grid grid-cols-3 gap-2">
                            <button onClick={() => buyRocks(1)} type="button" className="bg-white text-black rounded w-full p-4">
                                Mint x1
                            </button>
                            <button onClick={() => buyRocks(2)} type="button" className="bg-white text-black rounded w-full p-4">
                                Mint x2
                            </button>
                            <button onClick={() => buyRocks(3)} type="button" className="bg-white text-black rounded w-full p-4">
                                Mint x3
                            </button>
                        </div>
                    )}

                    {status === 'error' && <p className="text-xs text-red-400">An error ocurred. Minting may not have opened yet!</p>}
                    {status === 'complete' && <p className="text-xs text-green-400">Your NFT has been minted to your wallet.</p>}
                </div>

                <TokenViewer />

                <div>
                    <img className="rounded max-w-2xl w-full" src="https://media.discordapp.net/attachments/1077288626133663824/1136023638303309844/FrenBadge_1.png" alt="" />
                </div>

                <div>
                    <p className="opacity-50 text-center">
                        A{' '}
                        <a className="underline hover:no-underline" href="http://fren.fi" target="_blank" rel="noreferrer">
                            Fren.Fi
                        </a>{' '}
                        Project
                    </p>
                </div>
            </div>
        </div>
    )
}
