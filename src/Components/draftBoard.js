import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-modal';
import Table from 'react-bootstrap/Table';
import '../App.css'

export default function DraftBoard(){
    const playersDrafted = useSelector((state) => state.playersDraftedReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);
    const [show, setShow] = useState(false);


    const customStyles = {
        content : {
          top                   : '40%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
        }
      };

    return (
        <div>
            <button onClick={() => setShow(true)}>Draft Board</button>
            <Modal isOpen={show} style={customStyles} onRequestClose={() => setShow(false)}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Round</th>
                                <th>pick 1</th>
                                <th>pick 2</th>
                                <th>pick 3</th>
                                <th>pick 4</th>
                                <th>pick 5</th>
                                <th>pick 6</th>
                                <th>pick 7</th>
                                <th>pick 8</th>
                                <th>pick 9</th>
                                <th>pick 10</th>
                                <th>pick 11</th>
                                <th>pick 12</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <h4>{draftOrder[0].name}</h4>
                                    <p>{playersDrafted[0]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[1].name}</h4>
                                    <p>{playersDrafted[1]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[2].name}</h4>
                                    <p>{playersDrafted[2]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[3].name}</h4>
                                    <p>{playersDrafted[3]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[4].name}</h4>
                                    <p>{playersDrafted[4]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[5].name}</h4>
                                    <p>{playersDrafted[5]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[6].name}</h4>
                                    <p>{playersDrafted[6]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[7].name}</h4>
                                    <p>{playersDrafted[7]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[8].name}</h4>
                                    <p>{playersDrafted[8]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[9].name}</h4>
                                    <p>{playersDrafted[9]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[10].name}</h4>
                                    <p>{playersDrafted[10]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[11].name}</h4>
                                    <p>{playersDrafted[11]?.fullName}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <h4>{draftOrder[12].name}</h4>
                                    <p>{playersDrafted[12]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[13].name}</h4>
                                    <p>{playersDrafted[13]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[14].name}</h4>
                                    <p>{playersDrafted[14]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[15].name}</h4>
                                    <p>{playersDrafted[15]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[16].name}</h4>
                                    <p>{playersDrafted[16]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[17].name}</h4>
                                    <p>{playersDrafted[17]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[18].name}</h4>
                                    <p>{playersDrafted[18]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[19].name}</h4>
                                    <p>{playersDrafted[19]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[20].name}</h4>
                                    <p>{playersDrafted[20]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[21].name}</h4>
                                    <p>{playersDrafted[21]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[22].name}</h4>
                                    <p>{playersDrafted[22]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[23].name}</h4>
                                    <p>{playersDrafted[23]?.fullName}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <h4>{draftOrder[24].name}</h4>
                                    <p>{playersDrafted[24]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[25].name}</h4>
                                    <p>{playersDrafted[25]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[26].name}</h4>
                                    <p>{playersDrafted[26]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[27].name}</h4>
                                    <p>{playersDrafted[27]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[28].name}</h4>
                                    <p>{playersDrafted[28]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[29].name}</h4>
                                    <p>{playersDrafted[29]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[30].name}</h4>
                                    <p>{playersDrafted[30]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[31].name}</h4>
                                    <p>{playersDrafted[31]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[32].name}</h4>
                                    <p>{playersDrafted[32]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[33].name}</h4>
                                    <p>{playersDrafted[33]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[34].name}</h4>
                                    <p>{playersDrafted[34]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[35].name}</h4>
                                    <p>{playersDrafted[35]?.fullName}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <h4>{draftOrder[36].name}</h4>
                                    <p>{playersDrafted[36]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[37].name}</h4>
                                    <p>{playersDrafted[37]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[38].name}</h4>
                                    <p>{playersDrafted[38]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[39].name}</h4>
                                    <p>{playersDrafted[39]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[40].name}</h4>
                                    <p>{playersDrafted[40]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[41].name}</h4>
                                    <p>{playersDrafted[41]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[42].name}</h4>
                                    <p>{playersDrafted[42]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[43].name}</h4>
                                    <p>{playersDrafted[43]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[44].name}</h4>
                                    <p>{playersDrafted[44]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[45].name}</h4>
                                    <p>{playersDrafted[45]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[46].name}</h4>
                                    <p>{playersDrafted[46]?.fullName}</p>
                                </td>
                                <td>
                                    <h4>{draftOrder[47].name}</h4>
                                    <p>{playersDrafted[47]?.fullName}</p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                
            </Modal>
        </div>
    )
}