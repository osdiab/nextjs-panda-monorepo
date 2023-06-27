import { Button, Header } from "ui";
import { hstack } from "../styled-system/patterns";
import { css, cx } from "../styled-system/css";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <div className={cx(hstack({gap: "12"}), css({color: "red"}))}>
        <span>Hi</span>
        <span>Hi</span>
        <span>Hi</span>
      </div>
      <Button />
    </>
  );
}
