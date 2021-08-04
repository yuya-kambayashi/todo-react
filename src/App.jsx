import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>aaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>bbb</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ccc</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
