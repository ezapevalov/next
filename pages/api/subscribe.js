import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        const email = req.body.email;
        const filePath = buildSubscriptionsFilePath();
        const fileData = JSON.parse(fs.readFileSync(filePath));
        
        fileData.push(email);
        
        fs.writeFileSync(filePath, JSON.stringify(fileData));
      
        res.status(200).json({
          address: '/api/subscribe',
          method: 'POST',
          status: 'success',
          message: `[${email}] was added to subscription list`
        });
      
        break;
      default:
        res.status(200).json({
          address: '/api/subscribe',
          method: 'GET',
          status: 'success',
          message: 'Nothing to see here'
        })
    
    }
  } catch (e) {
    res.status(200).json({
      address: '/api/subscribe',
      method: req.method,
      status: 'error',
      error: e
    })
  }
}

export function buildSubscriptionsFilePath() {
  return path.join(process.cwd(), 'data', 'subscriptions.json');
}
