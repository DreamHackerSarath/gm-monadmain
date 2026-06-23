# GM Monad 🌅

A daily GM platform for the Monad ecosystem featuring referral rewards, leaderboards, and on-chain profiles. Built on the fastest EVM-compatible blockchain with 10,000 TPS.

## 🚀 Features

- **Daily GM**: Send a daily "good morning" for 1 MON on Monad
- **Referral System**: Earn 0.5 MON for each friend you refer
- **Leaderboard**: Compete with other users on the fastest blockchain
- **Streak Counter**: Build and maintain your daily GM streak
- **On-chain Profiles**: Store your social media handles and addresses
- **Monad Integration**: Built specifically for Monad's high-performance EVM

## 🔗 Monad Network

This platform is built on **Monad**, the next-generation EVM-compatible blockchain:

- **10,000 TPS**: Ultra-high throughput for seamless transactions
- **Full EVM Compatibility**: All Ethereum tools and contracts work
- **Low Fees**: Minimal transaction costs for daily interactions
- **Developer Friendly**: Easy deployment with existing Ethereum tooling

### Network Details
- **Testnet RPC**: https://testnet-rpc.monad.xyz
- **Chain ID**: 10143
- **Explorer**: https://testnet.monadexplorer.com
- **Faucet**: https://testnet.monad.xyz/

## 🛠 Smart Contract Features

- **GM Fee**: 1 MON per daily GM (sent to 0xF0d52c2Ff5f4779a0D10D81824b2F7EB40c2EDb9)
- **Referral GM**: 0.5 MON (0.25 to owner wallet, 0.25 to referrer)
- **Reward Claims**: 60-day cooldown for claiming referral rewards
- **Profile Management**: On-chain storage of social handles
- **Streak Tracking**: Daily participation tracking
- **Security**: ReentrancyGuard and proper access controls

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MetaMask or compatible Web3 wallet
- MON tokens from Monad testnet faucet

### Quick Setup

1. **Clone and Install**:
\`\`\`bash
git clone <repository-url>
cd gm-monad
npm install
\`\`\`

2. **Environment Setup**:
\`\`\`bash
cp .env.example .env
# Add your PRIVATE_KEY and MONAD_TESTNET_RPC_URL
\`\`\`

3. **Deploy Smart Contract**:
\`\`\`bash
npm run compile
npm run deploy:testnet
\`\`\`

4. **Update Contract Address**:
Update `CONTRACT_ADDRESS` in `hooks/use-contract.ts` with deployed address

5. **Start Development**:
\`\`\`bash
npm run dev
\`\`\`

### Adding Monad Testnet to MetaMask

The app will automatically prompt you to add Monad Testnet, or add manually:

- **Network Name**: Monad Testnet
- **RPC URL**: https://testnet-rpc.monad.xyz
- **Chain ID**: 10143
- **Currency Symbol**: MON
- **Block Explorer**: https://testnet.monadexplorer.com

### Getting Testnet Tokens

1. Visit [Monad Testnet Faucet](https://testnet.monad.xyz/)
2. Connect your wallet
3. Request testnet MON tokens
4. Wait for confirmation

## 📱 Usage

1. **Connect Wallet**: Connect MetaMask to Monad Testnet
2. **Get Testnet MON**: Use the built-in faucet helper
3. **Send Daily GM**: Click the GM button (costs 1 MON)
4. **Refer Friends**: Share your referral link
5. **Build Streaks**: Maintain daily participation
6. **Claim Rewards**: Withdraw referral earnings every 60 days
7. **Update Profile**: Set your social media handles

## 🏗 Smart Contract Functions

### Core Functions
- `gm()`: Send daily GM for 1 MON
- `referGM(address referrer)`: Send referral GM for 0.5 MON
- `claimRewards()`: Claim accumulated referral rewards
- `setProfile(...)`: Update on-chain profile

### View Functions
- `gmCount()`: Total GMs sent globally
- `referralRewards(address)`: Pending rewards for user
- `canSendGM(address)`: Check if user can send GM today
- `nextClaimTime(address)`: Next reward claim timestamp

## 🧪 Testing

Run the comprehensive test suite:
\`\`\`bash
npm test
\`\`\`

Tests cover:
- GM functionality and fees
- Referral system mechanics
- Profile management
- Reward claiming with cooldowns
- Security and access controls

## 🌐 Deployment

### Testnet Deployment
\`\`\`bash
npm run deploy:testnet
console.log("Owner wallet:", "0xF0d52c2Ff5f4779a0D10D81824b2F7EB40c2EDb9")
\`\`\`

### Mainnet (Coming Soon)
Monad mainnet deployment will be available when the network launches.

## 🔗 Links

- [Monad Website](https://www.monad.xyz/)
- [Monad Developers](https://developers.monad.xyz/)
- [Monad Testnet](https://testnet.monad.xyz/)
- [Monad Explorer](https://testnet.monadexplorer.com/)
- [Original GM Inspiration](https://gm.inkonchain.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- Open GitHub issues for bugs
- Join the Monad Developer Discord
- Check the Monad documentation

---

**Built with ❤️ for the Monad ecosystem**

*Powered by Monad's 10,000 TPS EVM-compatible blockchain*

*Explorer: [testnet.monadexplorer.com](https://testnet.monadexplorer.com/)*
