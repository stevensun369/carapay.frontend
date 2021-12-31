import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

// components
import HeaderHome from '../components/HeaderHome'
// import Loader from '../components/Loader'
import Transaction from '../components/Transaction'
import Footer from '../components/Footer'

// styles
import styles from '../css/HomeScreen.module.css'
import {
  getBalance,
  getTransactions,
  makeTransactionDelete,
} from '../actions/actions'
import protect from '../utils/protect'

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)

  const transactions = useSelector((state) => state.transactions)

  const balance = useSelector((state) => state.balance)

  const dispatch = useDispatch('')
  const navigate = useNavigate()

  useEffect(() => {
    protect(userLogin, navigate)
  }, [navigate, userLogin])

  useEffect(() => {
    dispatch(getTransactions())
    dispatch(getBalance())
    dispatch(makeTransactionDelete())
  }, [dispatch])

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
        {transactions.transactions ? (
          <>
            <div className={styles.separator}></div>
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
                key={t.transactionID}
              />
            ))}
          </>
        ) : (
          <div className='nothingToShow'>
            Nu exista tranzactii inca
          </div>
        )}
      </div>

      <Link to='/send'>
        <div className={styles.createTransactionButton}>
          <span className={styles.createTransactionButtonSpan}>
            Trimite
          </span>
        </div>
      </Link>

      {/* footer */}
      <Footer screen='home' />
    </>
  )
}

export default HomeScreen
