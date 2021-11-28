import { store } from 'react-notifications-component';
import { useRef } from 'react'

function NewsSubscription() {
  const emailInputRef = useRef();
  
  async function handleNewsSubscriptionForm(event) {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const subscriptionURL = '/api/subscribe';
    
    const response = await fetch(subscriptionURL, {
      method: 'POST',
      body: JSON.stringify({email: enteredEmail}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const responseBodyJSON = await response.json();
    
    console.log(responseBodyJSON);
  
    store.addNotification({
      title: "Subscribed!",
      message: `You'll receive news to ${enteredEmail}`,
      type: "success",
      insert: "top",
      container: "top-left",
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
  }
  
  return (
    <div className="row">
      <div className="panel panel-default col-md-4">
        <div className="panel-heading"><p className="text-muted">Subscribe to news</p></div>
        <div className="panel-body">
          <form id="newsSubscriptionForm" onSubmit={handleNewsSubscriptionForm}>
            <div className="col-xs-8">
              <input type="email"
                     ref={emailInputRef}
                     className="form-control input-sm"
                     id="newsSubscriptionFormEmail"
                     name="email"
                     required
                     placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-sm btn-success ">Subscribe</button>
  
            <div className="checkbox col-xs-8">
              <label>
                <input type="checkbox" id="newsSubscriptionFormAgree" name="agree" required /> I'm agree with terms
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsSubscription