import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsersListData } from "../../features/getUsersList/model/services/getUsersListService";
import { StateSchema } from "../../app/providers/StoreProvider/config/StateSchema";
import { useAppDispatch } from "../../shared/utils/hooks/reduxHooks";
import UserCard from "../../widgets/UserCard/UserCard";
import "./MainPage.css";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: StateSchema) => state.usersList.usersList);
  useEffect(() => {
    dispatch(getUsersListData());
  }, []);
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header-wrapper">
          <h1 className="main__header-title">Наша команда</h1>
          <p className="main__header__text">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </div>
      <div className="main__users-wrapper">
        {data &&
          data.map((item) => {
            return (
              <UserCard
                key={item.id}
                avatar={item.avatar}
                firstName={item.first_name}
                lastName={item.last_name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MainPage;
