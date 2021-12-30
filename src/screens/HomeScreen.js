import React from 'react'
import { useSelector } from 'react-redux'

// components
import HeaderHome from '../components/HeaderHome'
import Loader from '../components/Loader'
import Transaction from '../components/Transaction'
import Footer from '../components/Footer'

// styles
import styles from '../css/HomeScreen.module.css'

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)

  const transactions = useSelector((state) => state.transactions)

  const balance = useSelector((state) => state.balance)
  return (
    <>
      <HeaderHome></HeaderHome>

      {/* balance thingie */}
      <div className={styles.balance}>
        <span className={styles.balanceNumber}>
          {balance.balance && <>₡ {balance.balance.balance}</>}
          {/* <div className={styles.balanceCurrency}>
            <div className={styles.balanceCurrencyImg}></div>
          </div> */}
        </span>
      </div>

      {/* transactions */}
      <div className={styles.transactions}>
        <div className={styles.separator}></div>
        {/* <Transaction type='receive' />
        <Transaction type='send' /> */}

        {transactions.loading && <Loader />}

        {transactions.transactions && (
          <>
            {transactions.transactions.map((t) => (
              <Transaction
                type={
                  t.from === userLogin.userInfo.userID
                    ? 'send'
                    : 'receive'
                }
                amount={t.amount}
                personID={
                  t.from === userLogin.userInfo.userID ? t.to : t.from
                }
                message={t.message}
                date={t.createdAt}
              />
            ))}
          </>
        )}
      </div>

      {/* footer */}
      <Footer screen='home' />
    </>
  )
}

export default HomeScreen
