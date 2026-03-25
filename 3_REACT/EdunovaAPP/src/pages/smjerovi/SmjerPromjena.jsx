import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SmjerService from "../../services/smjerovi/SmjerService"
import { Button, Col, Form, Row } from "react-bootstrap"
import { RouteNames } from "../../constants"

export default function SmjerPromjena(){

const params = useParams()
const [smjer,setSmjer] =useState({})

useEffect(()=>{
    ucitajSmjer()
},[])

async function ucitajSmjer() {
    await SmjerService.getBySifra(params.sifra).then((odgovor)=>{
        setSmjer(odgovor.data)
       // console.table(odgovor.data)
    })
    
}


function odradiSubmit(e){

}

    return (
     <>
            <h3>Promjena smjera  {smjer.naziv}  </h3>
            <Form  onSubmit={odradiSubmit}>
                <Form.Group controlId="naziv" >
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type='text' name="naziv" required />
                </Form.Group>
                     
                 <Form.Group controlId="trajanje">
                     <Form.Label>Trajanje</Form.Label>
                    <Form.Control type='number' name="trajanje" step={1} />
                </Form.Group>

                <Form.Group controlId="cijena" >
                    <Form.Label>Cijena</Form.Label>
                    <Form.Control type="number" name="cijena" step={0.01} />
                </Form.Group>

                <Form.Group controlId="datumPokretanja">
                    <Form.Label>Datum pokretanja smjera</Form.Label>
                    <Form.Control type="date" name="datumPokretanja" />
                </Form.Group>

                <Form.Group controlId="aktivan">
                    <Form.Check label="Aktivan" name="aktivan" />

                </Form.Group>

                <Row className="mt-4">
                    <Col>
                        <Link to={RouteNames.SMJEROVI} className="btn btn-danger" >
                        Odustani
                        </Link>
                    </Col>

                    <Col>
                       <Button type="submit" variant="success">
                            dodaj novi smjer
                       </Button>
                    </Col>
                
                </Row>

                </Form>    
        
        </>
    )
}

