import React, {useEffect, useState} from "react";
import Sqlite from "../../Api/Sqlite";
import MaterialTable from "material-table";


const MainTable = (props) => {
    const [table, setTable] = useState([]);

    const [hipposByID, setHipposByID] = useState([]);
    const [testInfoByID, setTestInfoByID] = useState([]);
    const [merged, setMerged] = useState();

    // sets props state
    useEffect(() => {
        setTable(props.infoData);
    }, [props]);

    // get data by id
    useEffect( async () => {
        const response = await Sqlite.getHippoById(table.hippoId);
        setHipposByID(response.data);
    }, [table]);

    // get data by id
    useEffect( async () => {
        const responseTest = await Sqlite.getTestById(table.testId);
        setTestInfoByID(responseTest.data);
    }, [table]);

    // merges 2 tables by id
    useEffect(() => {
            toMerge();
    }, [testInfoByID]);

    const toMerge = () => {
        const allData = [];
        allData.push({
            num: 1,
            hippoId: testInfoByID.patient_id,
            testId: testInfoByID.id,
            testResult: table.testResult,
            created_atTest: testInfoByID.created_at,
            resource_type: testInfoByID.resource_type,
            updated_atTest: testInfoByID.updated_at,
            givenName: table.name,
            created_at_hipposByID: hipposByID.created_at,
            updated_at_hipposByID: hipposByID.updated_at,
        });
        setMerged(allData);
    }

    const columns = [
        {
            title: "NAME",
            field: "givenName",
            width: '10%'
        },
        {
            title: "TEST RESULT",
            field: "testResult",
        },
        {
            title: "Registered",
            field: "created_at_hipposByID",
        },
        {

            title: "Tested On",
            field: "created_atTest",
        },
        {
            title: "TEST Result Date",
            field: "updated_atTest",
        },
        {
            title: "Resource",
            field: "resource_type",
        },
    ]

    // table that displays detailed data for the parent component
    return (

        <div>
            <MaterialTable
                style={{marginTop: '15vh'}}
                title="Detailed Info About hippopotamus"
                columns={columns}
                data={merged}
                options={{
                    tableLayout: "fixed"
                }}
            />
        </div>
    );
};

export default MainTable;