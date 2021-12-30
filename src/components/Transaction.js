import React from 'react'

// styles
import styles from '../css/components/Transaction.module.css'

const Transaction = ({ type, amount, personID, message, date }) => {
  const timeConverter = (date) => {
    var a = new Date(date)
    var months = [
      'Ianuarie',
      'Februarie',
      'Martie',
      'Aprilie',
      'Mai',
      'Iunie',
      'Iulie',
      'August',
      'Septembrie',
      'Octombrie',
      'Noiembrie',
      'Decembrie',
    ]
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var day = a.getDate()
    var hour = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var time =
      day +
      ' ' +
      month +
      ' ' +
      year +
      ' ' +
      hour +
      ':' +
      min +
      ':' +
      sec
    return time
  }
  return (
    <>
      <div className={styles.transaction}>
        <div className={styles.transactionValue}>
          {type === 'send' && (
            <span className={styles.transactionValueSpanSend}>
              ₡ {amount}
            </span>
          )}

          {type === 'receive' && (
            <span className={styles.transactionValueSpanReceive}>
              ₡ {amount}
            </span>
          )}
        </div>

        <div className={styles.transactionData}>
          <div className={styles.transactionDataMessage}>
            {message}
          </div>
          <div className={styles.transactionDataPerson}>
            {type === 'receive' && <>from: {personID}</>}

            {type === 'send' && <>to: {personID}</>}
          </div>
          <div className={styles.transactionDataDate}>
            {timeConverter(date)}
          </div>
        </div>
      </div>
      <div className={styles.separator}></div>
    </>
  )
}

export default Transaction
