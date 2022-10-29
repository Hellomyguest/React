import styles from './TableRow.module.css';

export function TableRow({ children }) {
  return (
    <div className={styles._}>
      {children}
      {/* <TableCell className={classNames(styles.cell, styles.cell_filtering)}>
        <ControlWithLabel
          control={<Checkbox />}
          className={styles.cellCheckbox}
        />
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.orderNumber}</span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.date}</span>
      </TableCell>
      <TableCell
        className={classNames(styles.cell, {
          [styles.cell_canseled]: status.declined,
        })}
      >
        <Icon
          iconType={status.iconType}
          className={classNames(styles.icon, status.iconClassName)}
        />
        <span className={classNames(styles.text, status.textClassName)}>
          {status.name}
        </span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.amount}</span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.sum}</span>
      </TableCell>
      <TableCell className={styles.cell}>
        <span className={styles.text}>{value.customer}</span>
      </TableCell> */}
    </div>
  );
}
