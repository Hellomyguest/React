import React from 'react';
import {
  Button,
  Dropdown,
  InputWithLabel,
  Table,
  TableBody,
  TableCell,
  TableHeader,
} from '../../../../shared/ui';

export function TableForm({ id }) {
  return (
    <Table>
      <TableHeader>
        <TableCell>
          <span>Заявка #{id}</span>
          <Dropdown
            trigger={<Button iconType="Xmedium" />}
            overlay={
              <>
                <span>Есть несохраненные изменения</span>
                <Button color="reversePrimary" size="small" maxWidth>
                  Сбросить
                </Button>
                <Button color="reversePrimary" size="small" maxWidth>
                  Остаться
                </Button>
              </>
            }
          />
        </TableCell>
      </TableHeader>
      <TableBody>
        <InputWithLabel />
      </TableBody>
    </Table>
  );
}
