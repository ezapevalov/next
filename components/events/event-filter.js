import { useRef } from 'react'
import { useRouter } from 'next/router'

function EventFilter() {
  const router = useRouter();
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  
  function submitHandler(event) {
    event.preventDefault();
    
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    
    const url = `/events/filter/${selectedYear}/${selectedMonth}`;
    
    router.push(url);
  }
  
  return (
    <div className="event">
      <div className="container">
        <form className="form-inline" id="filterEventForm" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="filterEventYear" className="col-sm-3 control-label">Year</label>
            <div className="col-sm-3">
              <select ref={yearInputRef} className="form-control" id="filterEventYear">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="filterEventMonth" className="col-sm-3 control-label">Month</label>
            <div className="col-sm-3">
              <select ref={monthInputRef} className="form-control" id="filterEventMonth">
                {monthNames.map((monthName, index) => <option key={index} value={index+1}>{monthName}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success">Filter</button>
        </form>
      </div>
    </div>
  );
}

export default EventFilter;