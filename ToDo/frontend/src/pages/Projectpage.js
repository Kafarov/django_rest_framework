import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Pagination, Container} from '@mui/material'

import ProjectList from "../components/Project";


const BASE_URL = 'http://127.0.0.1:8000/project/?'


function Projectpage() {
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [projects, setProjects] = useState([]);
  const [pageLimit, setPageLimit] = useState(3);

  useEffect(() => {
    axios.get(BASE_URL + `limit=${pageLimit}&offset=${(page - 1)*pageLimit}`).then(
      ({data}) => {
        console.log(data)
        setPageQty(Math.ceil(data.count / pageLimit))
        setProjects(data.results)
        console.log(projects)
        console.log(pageQty)
      }
    )
  },[page,])

  return(
    <siv>
      <Container>
        {pageQty >= 2 && (
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}

          sx={{marginX: 'auto'}}
        />)
        }
        </Container>
      <ProjectList project={projects} />
    </siv>
  )
}

export default Projectpage;