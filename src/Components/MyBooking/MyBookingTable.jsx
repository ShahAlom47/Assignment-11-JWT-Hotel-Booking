
import PropTypes from 'prop-types';
import { FaRegEdit } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyBookingTable = ( {data,handelCancel }) => {

  
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Departure </th>
                            <th>Arrival</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        data.map((data,index)=><tr key={data._id} className=" text-gray-800 font-semibold bg-base-200">
                        <th>{index}</th>
                        <td>{data.name}</td>
                        <td>{data.depDate}</td>
                        <td>{data.arrDate}</td>
                        <td>{data.roomPrice}</td>
                        <td><Link to={`/room-details/${data?.roomId}`}><button className=" btn btn-sm rounded-sm  border-none "><FcViewDetails /> </button></Link></td>
                        <td><Link to={`/update-date/${data?.roomId}`}><button className="btn btn-sm rounded-sm  hover:text-gray-500 border-none "><FaRegEdit /> </button></Link></td>
                        <td> <button onClick={() => handelCancel(data._id, data?.roomId)} className="btn btn-sm rounded-sm border-none "><MdOutlineCancel /></button></td>
                    </tr>

                        )
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookingTable;
MyBookingTable.propTypes = {
    data: PropTypes.array.isRequired,
    handelCancel:PropTypes.func.isRequired
  };