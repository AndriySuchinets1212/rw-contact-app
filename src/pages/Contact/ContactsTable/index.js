import format from "date-fns/format";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import parseISO from "date-fns/parseISO";
const useStyles = makeStyles({
    table: {},
});

export const ContactsTable = ({data}) => {
    const classes = useStyles();
    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uuid}> 
              <TableCell>
                <Avatar src={contact.picture.large} />
              </TableCell>
                <TableCell>
                {contact.name.title} {contact.name.first} {contact.name.last}
                </TableCell>
                <TableCell>
                    <Typography>{format(parseISO(contact.dob.date), 'MM/dd/yyyy')} years</Typography>  
                    <Typography>{contact.dob.age} years</Typography>  
                </TableCell>
                <TableCell>
                    <a href={'mailto:' + contact.email}>{contact.email}</a>
                </TableCell>
                <TableCell>
                    <a href={'tel:' + contact.phone}>{contact.phone}</a>
                </TableCell>
            
                <TableCell>{contact.nat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}