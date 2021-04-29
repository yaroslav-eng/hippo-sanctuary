import React, {useEffect, useState} from "react";
import Sqlite from "../../Api/Sqlite";
import MainTable from "./MainTable";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';


const Hippo = () => {


    const [hippos, setHippos] = useState([]);
    const [testInfo, setTestInfo] = useState([]);
    const [mainTable, setMainTable] = useState([]);
    const [termsValidation, setTermsValidation] = useState(false);
    const [selectedRow,setSelectedRow] = useState([]);
    const [clickedRowBool,setClickedRowBool] = useState(false);

    // gets data from the databases
    useEffect( () => {
        getHippos();
    }, []);

    // merges the data
    useEffect(() => {
            makeNameTestResult();
    }, [termsValidation]);

    const columns = [
        {
            title: "Number",
            field: "key",
            width: "10%"
        },
        {
            title: "NAME",
            field: "name",
            width: '10%'
        },
        {
            title: "TEST RESULT",
            field: "testResult",
        },
        {
            title: "RESULT UPDATED ON",
            field: "unpdatedOn",
        },
    ]

    const getHippos =  async () => {
        try {
            const response = await Sqlite.getAllHippos();
            setHippos(response.data);
            const responseTest = await Sqlite.getAllTests();
            setTestInfo(responseTest.data);
        } catch (e) {
            console.log(e, "= something went wrong");
        } finally {
            setTermsValidation(true);
        }
    };

    const rowClick = (props) => {
        setSelectedRow(props);
        setClickedRowBool(true);

    }

    const makeNameTestResult = () => {
        const people = [];
        for (let i = 0; i < testInfo.length; i++) {
            for (let k = 0; k < hippos.length; k++) {
                if (testInfo[i].patient_id === hippos[k].id) {
                    people.push({
                        key: i+1,
                        hippoId: testInfo[i].patient_id,
                        testId: testInfo[i].id,
                        testResult: testInfo[i].resource.valueCodeableConcept.coding[0].display,
                        name: hippos[k].resource.name[0].given[0],
                        unpdatedOn: testInfo[i].updated_at,
                    });
                }
            }
        }
        setMainTable(people);
    };

    return (
        <div style={{ backgroundColor: '#f5f6f8', height:'100vh', overflowY:"scroll"}}>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{justifyContent:'flex-start', marginTop: '2vh'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" href="/home">
                        <ArrowBackRoundedIcon />
                    </IconButton>
                </Grid>
            </Grid>

            {/*
            table that displays basic info
            */}
         <MaterialTable
            style={{marginTop: '15vh'}}
            title="Hippo Info"
            columns={columns}
            data={mainTable}
            onRowClick={(evt, rowData) =>
                rowClick(rowData)
            }
            options={{
                tableLayout: "fixed"
            }}
        />
            {clickedRowBool ?
            <MainTable
                infoData = {selectedRow}
            /> : null   }
            </Container>
        </div>
    );
}
export default Hippo;
