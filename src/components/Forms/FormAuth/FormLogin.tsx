import { Form, SubmitHandler, useForm } from "react-hook-form";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FormAuth.module.css";

interface LogForm {
  username: string;
  password: string;
}

export const FormLogin: React.FC<{ authLogin: () => void }> = ({
  authLogin,
}) => {
  const [users, setUsers] = useState<any[]>([]);
  const { register, handleSubmit, reset } = useForm<LogForm>();

  const db = getDatabase();
  const database = ref(db, `/authUsers/users`);

  useEffect(() => {
    const unsubscribe = onValue(database, (snapshot) => {
      const data = snapshot.val();
      const usersArray = data ? Object.values(data) : [];
      // Установить состояние только если данные изменились
      setUsers((prevUsers) => {
        if (JSON.stringify(prevUsers) !== JSON.stringify(usersArray)) {
          return usersArray;
        }
        return prevUsers;
      });
    });

    return () => unsubscribe(); // Отписываемся при размонтировании
  }, [database]);

  const submit: SubmitHandler<LogForm> = (data) => {
    console.log(data);

    const isAuthenticated = users.some(
      (user) =>
        user.username === data.username && user.password === data.password
    );

    if (isAuthenticated) {
      authLogin();
      reset(); // Сброс формы
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className={styles.authForm}>
      <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="username"> Логин </label>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Введите логин"
          />
        </div>
        <div>
          <label htmlFor="password"> Пароль </label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Введите пароль"
          />
        </div>
        <div>
          <button>Войти</button>
        </div>
      </form>
      <p>
        Нет аккаунта?
        <Link to="/Register">Зарегестрируйся</Link>
      </p>
    </div>
  );
};
