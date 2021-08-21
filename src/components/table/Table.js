import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import useTable from './useTable';
import UpdateForm from '../updateForm/UpdateForm';


const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function BasicTable({ List }) {
    const [deleteHandler] = useTable();
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tasks</TableCell>
                        <TableCell align="right">Update</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {List.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {item.task}
                            </TableCell>
                            <TableCell align="right"><UpdateForm item={item} /></TableCell>
                            <TableCell align="right"><Button style={{ color: 'red' }} onClick={() => { deleteHandler(item) }}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}