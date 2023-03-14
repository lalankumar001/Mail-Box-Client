// below code is for geting and deleting the expense from the firebase realtime database.
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseForm from "../Expense/ExpenseForm";
import styles from './ExpenseCard.module.css'




const Expense = () => {
 
  const [isShown, setIsShown] = useState(false);
  const [expenses, setExpenses] = useState({});

  const userEmail = useSelector((state) => state.auth.email);
  
  const expenseToggleHandler = () => {
    setIsShown((prev) => !prev);
  };

//Expense download button handler 
  const DownloadHandler =() => {
    const ExpDown= document.getElementById("ExpenseDownload");
    const Blob1 = new Blob(['Hello World' , 'Hello'], {type:'text/plain'});
      ExpDown.href = URL.createObjectURL(Blob1);
  };

  useEffect(() => {
    const url = `https://expensetracker-30ad5-default-rtdb.firebaseio.com/expenses/${userEmail}.json`;
    fetch(url, { method: "get" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert(Error(data.message));
        }
      })
      .then((data) => {
        setExpenses(data);
      })
      .catch((err) => console.error(err));
  }, [isShown]);

  const editHandler = (e) => {
    setIsShown((prev) => !prev);
  };

  const deleteHandler = (key) => {
    const url = `https://expensetracker-30ad5-default-rtdb.firebaseio.com/expenses/${key}.json`;
    fetch(url, { method: "delete" })
      .then((res) => res.json())
      .then(() => {
        setExpenses((prev) => {
          const updatedState = { ...prev };
          delete updatedState[key];
          return updatedState;
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    // Add Expense button toggeler here
    <div>
      {!isShown && (
        <button onClick={expenseToggleHandler} className={styles.buttonTogler}>
          Add Expense
        </button>
      )}
      {/* <h1 className="text-center p-5 fw-bold text-secondary">Total ₹ :</h1> */}
      {!isShown && expenses && (
        <div>
          {Object.keys(expenses).map((item) => (
            <div className="container card mt-4 p-5" key={item}>
              <h1 className={styles.ExpenseHeading}>
                Price: {expenses[item].amount}{" "}
              </h1>
              <h2 className={styles.ExpenseHeading}>
                Description: {expenses[item].description}{" "}
              </h2>
              <h3 className={styles.ExpenseHeading}>
                Category: {expenses[item].category}{" "}
              </h3>

              <div className="container w-50">
                <div className="row">
                  <div className="col">
                    <button
                      onClick={() => {
                        editHandler(item);
                      }}
                      className="btn btn-primary w-50"
                    >
                      edit
                    </button>
                  </div>
                  <div className="col">
                    <button
                      onClick={() => {
                        deleteHandler(item);
                      }}
                      className="btn btn-danger w-50"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {isShown && <ExpenseForm onExpenseToggle={expenseToggleHandler} />}
    {/* Expense Download Button here */}
    <div className="position-absolute bottom-0 end-0 text-decoration-underline btn btn- text-primary" > <a id="ExpenseDownload" download='file.txt' className="fs-4"   onClick={DownloadHandler}>Download Your Expense!</a></div>
    
    </div>
  );
};

export default Expense;
