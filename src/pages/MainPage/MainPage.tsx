import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersListData } from '../../features/getUsersList/model/services/getUsersListService';
import { StateSchema } from '../../app/providers/StoreProvider/config/StateSchema';
import './MainPage.css';

const MainPage = () => {
  const dispatch = useDispatch();
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
              <div className="main__user-card">
                <img
                  className="main__avatar"
                  src={item.avatar}
                  alt={item.first_name}
                />
                <p className="main__user-name">{`${item.first_name} ${item.last_name}`}</p>
                <button className="main__card-favorite">like</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MainPage;
