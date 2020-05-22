import React, { memo } from 'react'
import { P, Title, Table, TableHead, TableBody, TableRow, TableHeader, TableCell, Img } from './style';
import { Container } from '../../components/container/style';
import aboutUs from '../../img/bout.jpg';

const team = [
  { name: 'Mahmoud Ahmed', role: 'UI Designer' },
  { name: 'Ahmed Salah',   role: 'UX Designer' },
  { name: 'Ahmed Tawfik',  role: 'Security Developer' },
  { name: 'Moaaz Bhnas',   role: 'Web Developer' }
]

const About = () => {
  return (
    <Container>
      <Img src={aboutUs} alt="" />
      <P>We are team of three developers who are passionate about fashion.</P>
      <P>We follow different brands and trends. We've always been wondering why there weren't any Egyptian brands that are up-to-date, even thought we have a fine materials.</P>
      <P>So we decided to start by a small shop "Hdomi" where we sell few local-made products of our design.</P>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            team.map(member => (
              <TableRow key={member.name}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Container>
  );
}

export default memo(About);