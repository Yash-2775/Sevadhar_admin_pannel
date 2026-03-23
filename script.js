/* ══════════════════════════════════════════
   SEVADHAR ADMIN PANEL — script.js
   ══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   DATA STORE
───────────────────────────────────────── */

const WORKERS = [
  { id:1,  name:'Ravi Kumar',    phone:'+91 9876501234', services:['Cleaning','Plumbing'],      aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-18', rating:null, coins:0,    joined:'Jan 2025', city:'Mumbai'    },
  { id:2,  name:'Priya Devi',    phone:'+91 9845612345', services:['Plumbing'],                 aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-03-12', rating:4.8,  coins:1240, joined:'Feb 2025', city:'Pune'      },
  { id:3,  name:'Mohan Singh',   phone:'+91 9712345678', services:['Electrical'],               aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-19', rating:null, coins:0,    joined:'Mar 2025', city:'Nashik'    },
  { id:4,  name:'Sunita Rao',    phone:'+91 9988776655', services:['Childcare','Cooking'],      aadharFront:'🪪', aadharBack:'🪪', otp:false, status:'Rejected', date:'2025-03-10', rating:null, coins:0,    joined:'Jan 2025', city:'Mumbai'    },
  { id:5,  name:'Anjali Mehta',  phone:'+91 9512345678', services:['Cooking'],                  aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-03-05', rating:4.9,  coins:3200, joined:'Dec 2024', city:'Thane'     },
  { id:6,  name:'Suresh Gupta',  phone:'+91 9823456789', services:['Carpentry','Painting'],     aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-20', rating:null, coins:0,    joined:'Mar 2025', city:'Pune'      },
  { id:7,  name:'Kavitha Nair',  phone:'+91 9965432100', services:['Cooking','Cleaning'],       aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-21', rating:null, coins:0,    joined:'Mar 2025', city:'Mumbai'    },
  { id:8,  name:'Ramesh Kumar',  phone:'+91 9811234567', services:['AC Repair'],                aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-02-28', rating:4.6,  coins:5400, joined:'Nov 2024', city:'Nashik'    },
  { id:9,  name:'Deepa Sharma',  phone:'+91 9900112233', services:['Childcare'],                aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-22', rating:null, coins:0,    joined:'Mar 2025', city:'Aurangabad'},
  { id:10, name:'Vikram Singh',  phone:'+91 9832100000', services:['Plumbing','Electrical'],    aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Rejected', date:'2025-03-08', rating:null, coins:0,    joined:'Feb 2025', city:'Pune'      },
];

const PROFILE_UPDATES = [
  { id:1, workerId:2, workerName:'Priya Devi',   phone:'+91 9845612345', field:'Added Service', oldVal:'Plumbing',    newVal:'Plumbing, AC Repair',  date:'2025-03-20', status:'Pending'  },
  { id:2, workerId:5, workerName:'Anjali Mehta', phone:'+91 9512345678', field:'City',          oldVal:'Thane',       newVal:'Mumbai',               date:'2025-03-19', status:'Pending'  },
  { id:3, workerId:8, workerName:'Ramesh Kumar', phone:'+91 9811234567', field:'Profile Photo', oldVal:'Old Photo',   newVal:'New Photo uploaded',   date:'2025-03-18', status:'Pending'  },
  { id:4, workerId:2, workerName:'Priya Devi',   phone:'+91 9845612345', field:'Bio',           oldVal:'—',           newVal:'10 yrs experience…',   date:'2025-03-15', status:'Approved' },
];

const COINS_REQUESTS = [
  { id:1, workerId:2, name:'Priya Devi',   phone:'+91 9845612345', coins:1200, amount:600,  upi:'priya.devi@okaxis',  date:'2025-03-21', status:'Pending'  },
  { id:2, workerId:5, name:'Anjali Mehta', phone:'+91 9512345678', coins:3000, amount:1500, upi:'anjali.mehta@oksbi', date:'2025-03-20', status:'Pending'  },
  { id:3, workerId:8, name:'Ramesh Kumar', phone:'+91 9811234567', coins:1700, amount:850,  upi:'ramesh.k@okhdfc',    date:'2025-03-19', status:'Approved' },
  { id:4, workerId:5, name:'Anjali Mehta', phone:'+91 9512345678', coins:200,  amount:100,  upi:'anjali.mehta@oksbi', date:'2025-03-15', status:'Approved' },
  { id:5, workerId:8, name:'Ramesh Kumar', phone:'+91 9811234567', coins:800,  amount:400,  upi:'ramesh.k@okhdfc',    date:'2025-03-10', status:'Rejected' },
  { id:6, workerId:2, name:'Priya Devi',   phone:'+91 9845612345', coins:500,  amount:250,  upi:'priya.devi@okaxis',  date:'2025-03-22', status:'Pending'  },
  { id:7, workerId:5, name:'Kavitha Nair', phone:'+91 9965432100', coins:400,  amount:200,  upi:'kavitha.n@ybl',      date:'2025-03-21', status:'Pending'  },
];

const NOTIFICATIONS = [
  { id:1, text:'New worker registration from Kavitha Nair (Cooking, Cleaning)',          time:'5 min ago',  unread:true  },
  { id:2, text:'Deepa Sharma submitted Aadhaar documents for verification',              time:'18 min ago', unread:true  },
  { id:3, text:'Withdrawal request of ₹600 from Priya Devi — UPI pending',              time:'1 hr ago',   unread:true  },
  { id:4, text:'Profile update request from Anjali Mehta — city change',                time:'2 hrs ago',  unread:true  },
  { id:5, text:'Suresh Gupta completed OTP verification for registration',               time:'3 hrs ago',  unread:true  },
  { id:6, text:'Ramesh Kumar\'s withdrawal of ₹850 was approved',                       time:'5 hrs ago',  unread:false },
  { id:7, text:'Monthly analytics report for March 2025 is ready',                      time:'Yesterday',  unread:false },
  { id:8, text:'API sync completed successfully — 1,284 workers synced',                time:'Yesterday',  unread:false },
];

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
let workerData  = [...WORKERS];
let profileData = [...PROFILE_UPDATES];
let coinsData   = [...COINS_REQUESTS];

/* ─────────────────────────────────────────
   AUTHENTICATION
───────────────────────────────────────── */

/**
 * Validate login credentials and enter the app.
 * Demo: admin@sevadhar.in / admin123
 */
function doLogin() {
  const id = document.getElementById('login-id').value.trim();
  const pw = document.getElementById('login-pw').value;
  const validIds = ['admin@sevadhar.in', '9999999999'];

  if (validIds.includes(id) && pw === 'admin123') {
    document.getElementById('login-screen').classList.add('hide');
    setTimeout(() => {
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('app').style.display = 'flex';
      initApp();
    }, 500);
  } else {
    document.getElementById('login-error').style.display = 'block';
  }
}

/** Sign out and return to login screen. */
function doLogout() {
  document.getElementById('app').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-screen').classList.remove('hide');
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */

/**
 * Switch visible page and highlight the active nav item.
 * @param {string} id   - page id suffix (e.g. 'dashboard')
 * @param {Element} el  - clicked nav element
 */
function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page-' + id).classList.add('active');
  if (el) el.classList.add('active');

  const titles = {
    'dashboard'        : 'Dashboard',
    'verification'     : 'Worker Verification',
    'profile-approvals': 'Profile Approvals',
    'users'            : 'Manage Users',
    'seva-coins'       : 'Seva Coins',
    'analytics'        : 'Analytics',
    'notifications'    : 'Notifications',
    'settings'         : 'Settings',
  };
  document.getElementById('page-title').textContent = titles[id] || id;
}

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */

/** Return a coloured badge HTML string for a given status. */
function statusBadge(status) {
  const map = {
    Pending  : 'badge-pending',
    Approved : 'badge-approved',
    Rejected : 'badge-rejected',
    Active   : 'badge-active',
    Inactive : 'badge-inactive',
  };
  return `<span class="badge ${map[status] || ''}">${status}</span>`;
}

/* ─────────────────────────────────────────
   RENDER — WORKER VERIFICATION TABLE
───────────────────────────────────────── */

function renderVerification(data) {
  const tbody = document.getElementById('verification-tbody');
  if (!data.length) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty"><div class="empty-icon">🔍</div><div class="empty-text">No workers found</div></div></td></tr>`;
    return;
  }

  tbody.innerHTML = data.map(w => `
    <tr>
      <td>
        <div class="user-cell">
          <div class="avatar">${w.name[0]}</div>
          <div>
            <div class="user-name">${w.name}</div>
            <div class="user-phone">${w.phone}</div>
          </div>
        </div>
      </td>
      <td>${w.services.map(s => `<span class="service-tag">${s}</span>`).join('')}</td>
      <td>${w.otp
        ? '<span style="color:var(--green);font-size:18px">✓</span>'
        : '<span style="color:var(--red);font-size:18px">✗</span>'}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="viewDocs(${w.id})">View Docs 📄</button></td>
      <td style="color:var(--text-muted);font-size:12px">${w.date}</td>
      <td>${statusBadge(w.status)}</td>
      <td>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btn-sm" style="background:var(--blue-pale);color:var(--blue);border:none"
            onclick="openWorkerModal(${w.id})">View</button>
          ${w.status === 'Pending' ? `
            <button class="btn btn-green btn-sm" onclick="updateWorkerStatus(${w.id},'Approved')">Approve</button>
            <button class="btn btn-red   btn-sm" onclick="updateWorkerStatus(${w.id},'Rejected')">Reject</button>
          ` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

/* ─────────────────────────────────────────
   RENDER — PROFILE APPROVALS TABLE
───────────────────────────────────────── */

function renderProfileApprovals() {
  const tbody = document.getElementById('profile-approval-tbody');

  tbody.innerHTML = profileData.map(p => `
    <tr>
      <td>
        <div class="user-cell">
          <div class="avatar">${p.workerName[0]}</div>
          <div>
            <div class="user-name">${p.workerName}</div>
            <div class="user-phone">${p.phone}</div>
          </div>
        </div>
      </td>
      <td><strong>${p.field}</strong></td>
      <td style="color:var(--text-muted);max-width:140px;font-size:12px">${p.oldVal}</td>
      <td style="color:var(--orange);font-weight:600;max-width:160px;font-size:12px">${p.newVal}</td>
      <td style="color:var(--text-muted);font-size:12px">${p.date}</td>
      <td>${statusBadge(p.status)}</td>
      <td>
        <div style="display:flex;gap:6px">
          ${p.status === 'Pending' ? `
            <button class="btn btn-green btn-sm" onclick="approveProfile(${p.id})">Approve</button>
            <button class="btn btn-red   btn-sm" onclick="rejectProfile(${p.id})">Reject</button>
          ` : '<span style="font-size:12px;color:var(--text-muted)">Resolved</span>'}
        </div>
      </td>
    </tr>
  `).join('');
}

/* ─────────────────────────────────────────
   RENDER — MANAGE USERS TABLE
───────────────────────────────────────── */

function renderUsers(data) {
  const tbody = document.getElementById('users-tbody');

  tbody.innerHTML = data.map(w => {
    const displayStatus = w.status === 'Approved' ? 'Active' : 'Inactive';
    return `
      <tr>
        <td>
          <div class="user-cell">
            <div class="avatar">${w.name[0]}</div>
            <div>
              <div class="user-name">${w.name}</div>
              <div class="user-phone">${w.phone}</div>
            </div>
          </div>
        </td>
        <td>${w.services.map(s => `<span class="service-tag" style="font-size:11px">${s}</span>`).join('')}</td>
        <td style="color:var(--text-muted);font-size:12px">${w.joined}</td>
        <td>${statusBadge(displayStatus)}</td>
        <td>
          <span class="coins-amount">${w.coins}
            <span style="font-size:11px;font-weight:400;color:var(--text-muted)">coins</span>
          </span>
        </td>
        <td>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <button class="btn btn-sm" style="background:var(--blue-pale);color:var(--blue);border:none"
              onclick="openWorkerModal(${w.id})">Edit</button>
            <button class="btn btn-yellow btn-sm" onclick="toggleUser(${w.id})">Deactivate</button>
            <button class="btn btn-red    btn-sm" onclick="deleteUser(${w.id})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/* ─────────────────────────────────────────
   RENDER — SEVA COINS TABLE
───────────────────────────────────────── */

function renderCoins() {
  const tbody = document.getElementById('coins-tbody');

  tbody.innerHTML = coinsData.map(c => `
    <tr>
      <td>
        <div class="user-cell">
          <div class="avatar">${c.name[0]}</div>
          <div>
            <div class="user-name">${c.name}</div>
            <div class="user-phone">${c.phone}</div>
          </div>
        </div>
      </td>
      <td><span class="coins-amount">${c.coins} 🪙</span></td>
      <td><strong>₹${c.amount}</strong></td>
      <td><span class="upi-id">${c.upi}</span></td>
      <td style="color:var(--text-muted);font-size:12px">${c.date}</td>
      <td>${statusBadge(c.status)}</td>
      <td>
        <div style="display:flex;gap:6px">
          ${c.status === 'Pending' ? `
            <button class="btn btn-green btn-sm" onclick="openCoinsModal(${c.id})">Approve</button>
            <button class="btn btn-red   btn-sm" onclick="rejectCoins(${c.id})">Reject</button>
          ` : `
            <button class="btn btn-ghost btn-sm" onclick="openCoinsModal(${c.id})">Details</button>
          `}
        </div>
      </td>
    </tr>
  `).join('');
}

/* ─────────────────────────────────────────
   RENDER — NOTIFICATIONS
───────────────────────────────────────── */

function renderNotifications() {
  const list = document.getElementById('notif-list');

  list.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}">
      <div class="notif-dot ${n.unread ? '' : 'read'}"></div>
      <div class="notif-content">
        <div class="notif-text">${n.text}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────
   RENDER — ANALYTICS
───────────────────────────────────────── */

function renderAnalytics() {
  const services = [
    { name:'🧹 Cleaning',   count:342, pct:27 },
    { name:'🔧 Plumbing',   count:218, pct:17 },
    { name:'⚡ Electrical', count:196, pct:15 },
    { name:'🍳 Cooking',    count:284, pct:22 },
    { name:'👶 Childcare',  count:148, pct:12 },
    { name:'🪚 Carpentry',  count:96,  pct:7  },
  ];

  document.getElementById('service-breakdown').innerHTML = services.map(s => `
    <div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;font-size:13px">
        <span>${s.name}</span><span style="font-weight:600">${s.count}</span>
      </div>
      <div style="height:7px;border-radius:10px;background:var(--border)">
        <div style="width:${s.pct}%;height:100%;border-radius:10px;background:var(--orange);transition:width 0.6s ease"></div>
      </div>
    </div>
  `).join('');

  document.getElementById('approval-stats').innerHTML = `
    <div style="display:flex;gap:16px;margin-bottom:16px">
      <div style="flex:1;text-align:center;padding:16px;background:var(--green-pale);border-radius:12px">
        <div style="font-size:28px;font-weight:700;color:var(--green)">74%</div>
        <div style="font-size:13px;color:var(--text-secondary)">Approval Rate</div>
      </div>
      <div style="flex:1;text-align:center;padding:16px;background:var(--red-pale);border-radius:12px">
        <div style="font-size:28px;font-weight:700;color:var(--red)">18%</div>
        <div style="font-size:13px;color:var(--text-secondary)">Rejection Rate</div>
      </div>
      <div style="flex:1;text-align:center;padding:16px;background:var(--yellow-pale);border-radius:12px">
        <div style="font-size:28px;font-weight:700;color:var(--yellow)">8%</div>
        <div style="font-size:13px;color:var(--text-secondary)">Still Pending</div>
      </div>
    </div>
    <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">Avg. review time: <strong>4.2 hrs</strong></div>
    <div style="font-size:13px;color:var(--text-secondary)">Docs missing: <strong>12 cases</strong></div>
    <div style="font-size:13px;color:var(--text-secondary);margin-top:8px">OTP failures: <strong>3 cases</strong></div>
  `;
}

/* ─────────────────────────────────────────
   RENDER — BAR CHART
───────────────────────────────────────── */

function renderChart() {
  const chart = document.getElementById('chart');
  if (!chart) return;

  const vals = [42, 58, 73, 95, 112, 88, 130, 148];
  const max  = Math.max(...vals);

  chart.innerHTML = vals.map(v => `
    <div class="chart-bar-wrap">
      <div style="flex:1;display:flex;align-items:flex-end;width:100%">
        <div class="chart-bar"
          style="height:${(v / max) * 100}%;min-height:8px"
          title="${v} registrations"></div>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────
   MODAL — WORKER DETAIL
───────────────────────────────────────── */

function openWorkerModal(id) {
  const w = WORKERS.find(x => x.id === id);
  if (!w) return;

  document.getElementById('modal-worker-name').textContent = w.name;

  document.getElementById('modal-worker-body').innerHTML = `
    <div class="profile-section">Personal Information</div>
    <div class="profile-grid">
      <div class="profile-field"><div class="profile-label">Full Name</div>         <div class="profile-value">${w.name}</div></div>
      <div class="profile-field"><div class="profile-label">Phone (Login ID)</div>  <div class="profile-value">${w.phone}</div></div>
      <div class="profile-field"><div class="profile-label">City</div>              <div class="profile-value">${w.city}</div></div>
      <div class="profile-field"><div class="profile-label">Joined</div>            <div class="profile-value">${w.joined}</div></div>
      <div class="profile-field"><div class="profile-label">OTP Verified</div>      <div class="profile-value">${w.otp ? '✅ Yes' : '❌ No'}</div></div>
      <div class="profile-field"><div class="profile-label">Rating</div>            <div class="profile-value">${w.rating ? '⭐ ' + w.rating : '—'}</div></div>
      <div class="profile-field"><div class="profile-label">Seva Coins</div>        <div class="profile-value">🪙 ${w.coins}</div></div>
      <div class="profile-field"><div class="profile-label">Status</div>            <div class="profile-value">${statusBadge(w.status)}</div></div>
    </div>

    <div class="profile-section">Services Offered</div>
    <div>${w.services.map(s => `<span class="service-tag">${s}</span>`).join('')}</div>

    <div class="profile-section">Aadhaar Documents</div>
    <div class="grid-2">
      <div class="doc-card">
        <div class="doc-img" style="font-size:48px;color:var(--orange-border)">🪪</div>
        <div class="doc-label">Aadhaar Front</div>
      </div>
      <div class="doc-card">
        <div class="doc-img" style="font-size:48px;color:var(--orange-border)">🪪</div>
        <div class="doc-label">Aadhaar Back</div>
      </div>
    </div>
  `;

  document.getElementById('modal-worker-footer').innerHTML = w.status === 'Pending'
    ? `
      <button class="btn btn-ghost" onclick="closeModal('worker-modal')">Cancel</button>
      <button class="btn btn-red"   onclick="updateWorkerStatus(${w.id},'Rejected');closeModal('worker-modal')">Reject</button>
      <button class="btn btn-green" onclick="updateWorkerStatus(${w.id},'Approved');closeModal('worker-modal')">✓ Approve Worker</button>
    `
    : `<button class="btn btn-orange" onclick="closeModal('worker-modal')">Close</button>`;

  openModal('worker-modal');
}

/** Alias: open worker modal from "View Docs" button. */
function viewDocs(id) { openWorkerModal(id); }

/* ─────────────────────────────────────────
   MODAL — SEVA COINS DETAIL
───────────────────────────────────────── */

function openCoinsModal(id) {
  const c = coinsData.find(x => x.id === id);
  if (!c) return;

  document.getElementById('coins-modal-body').innerHTML = `
    <div style="background:var(--orange-pale);border-radius:12px;padding:20px;margin-bottom:20px;text-align:center">
      <div style="font-size:36px;font-weight:700;color:var(--orange);font-family:var(--font-display)">₹${c.amount}</div>
      <div style="color:var(--text-secondary);font-size:13px;margin-top:4px">${c.coins} Seva Coins @ ₹0.50/coin</div>
    </div>
    <div class="profile-grid">
      <div class="profile-field"><div class="profile-label">Worker Name</div><div class="profile-value">${c.name}</div></div>
      <div class="profile-field"><div class="profile-label">Phone</div>      <div class="profile-value">${c.phone}</div></div>
      <div class="profile-field"><div class="profile-label">UPI ID</div>     <div class="profile-value"><span class="upi-id">${c.upi}</span></div></div>
      <div class="profile-field"><div class="profile-label">Requested</div>  <div class="profile-value">${c.date}</div></div>
      <div class="profile-field"><div class="profile-label">Status</div>     <div class="profile-value">${statusBadge(c.status)}</div></div>
    </div>
    ${c.status === 'Pending' ? `
      <div style="background:var(--yellow-pale);border:1.5px solid #FDE68A;border-radius:10px;padding:14px;margin-top:16px;font-size:13px">
        <strong>⚠ Manual Payment Required</strong><br>
        Please send ₹${c.amount} to UPI: <strong>${c.upi}</strong> via Google Pay, PhonePe, or Paytm before approving.
      </div>
    ` : ''}
  `;

  document.getElementById('coins-modal-footer').innerHTML = c.status === 'Pending'
    ? `
      <button class="btn btn-ghost" onclick="closeModal('coins-modal')">Cancel</button>
      <button class="btn btn-red"   onclick="rejectCoins(${c.id});closeModal('coins-modal')">Reject</button>
      <button class="btn btn-green" onclick="approveCoins(${c.id});closeModal('coins-modal')">✓ Payment Done — Approve</button>
    `
    : `<button class="btn btn-orange" onclick="closeModal('coins-modal')">Close</button>`;

  openModal('coins-modal');
}

/** Open a modal overlay by ID. */
function openModal(id)  { document.getElementById(id).classList.add('open'); }

/** Close a modal overlay by ID. */
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

/* ─────────────────────────────────────────
   ACTIONS — WORKER STATUS
───────────────────────────────────────── */

/**
 * Update a worker's approval status and re-render both tables.
 * @param {number} id     - worker ID
 * @param {string} status - 'Approved' | 'Rejected'
 */
function updateWorkerStatus(id, status) {
  const w = WORKERS.find(x => x.id === id);
  if (!w) return;
  w.status = status;
  workerData = [...WORKERS];
  renderVerification(workerData);
  renderUsers(WORKERS);
  showToast(`${w.name} has been ${status.toLowerCase()}`, status === 'Approved' ? 'success' : 'error');
}

/* ─────────────────────────────────────────
   ACTIONS — PROFILE APPROVALS
───────────────────────────────────────── */

function approveProfile(id) {
  const p = profileData.find(x => x.id === id);
  if (p) { p.status = 'Approved'; renderProfileApprovals(); showToast('Profile update approved', 'success'); }
}

function rejectProfile(id) {
  const p = profileData.find(x => x.id === id);
  if (p) { p.status = 'Rejected'; renderProfileApprovals(); showToast('Profile update rejected', 'error'); }
}

/* ─────────────────────────────────────────
   ACTIONS — SEVA COINS
───────────────────────────────────────── */

function approveCoins(id) {
  const c = coinsData.find(x => x.id === id);
  if (c) { c.status = 'Approved'; renderCoins(); showToast(`₹${c.amount} withdrawal approved for ${c.name}`, 'success'); }
}

function rejectCoins(id) {
  const c = coinsData.find(x => x.id === id);
  if (c) { c.status = 'Rejected'; renderCoins(); showToast(`Withdrawal rejected for ${c.name}`, 'error'); }
}

/* ─────────────────────────────────────────
   ACTIONS — MANAGE USERS
───────────────────────────────────────── */

function toggleUser(id) {
  showToast('User account deactivated', 'info');
}

function deleteUser(id) {
  const w = WORKERS.find(x => x.id === id);
  if (w && confirm(`Delete ${w.name}'s account permanently?`)) {
    showToast(`${w.name} deleted`, 'error');
  }
}

/* ─────────────────────────────────────────
   SEARCH & FILTER
───────────────────────────────────────── */

/** Filter verification table by name or phone. */
function filterWorkers(query) {
  const q = query.toLowerCase();
  renderVerification(WORKERS.filter(w =>
    w.name.toLowerCase().includes(q) || w.phone.includes(q)
  ));
}

/** Filter verification table by service category. */
function filterWorkersByService(service) {
  renderVerification(service
    ? WORKERS.filter(w => w.services.includes(service))
    : WORKERS
  );
}

/** Search users by phone or name (phone is the login ID). */
function searchUsers(query) {
  const q = query.toLowerCase();
  renderUsers(WORKERS.filter(w =>
    w.name.toLowerCase().includes(q) || w.phone.includes(q)
  ));
}

/** Filter users table by Active / Inactive status. */
function filterUsersByStatus(status) {
  if (!status) { renderUsers(WORKERS); return; }
  const map = { Active: ['Approved'], Inactive: ['Rejected', 'Pending'] };
  renderUsers(WORKERS.filter(w => map[status].includes(w.status)));
}

/**
 * Global topbar search — routes to Manage Users page
 * and highlights matching results.
 */
function globalSearch(query) {
  if (query.length < 3) return;
  const q = query.toLowerCase();
  const found = WORKERS.filter(w =>
    w.phone.includes(q) || w.name.toLowerCase().includes(q)
  );
  if (found.length) {
    showPage('users', document.querySelector('[onclick*="users"]'));
    renderUsers(found);
    document.getElementById('user-search').value = query;
  }
}

/* ─────────────────────────────────────────
   TOAST NOTIFICATIONS
───────────────────────────────────────── */

/**
 * Show a self-dismissing toast message.
 * @param {string} msg   - message text
 * @param {string} type  - 'success' | 'error' | 'info' | ''
 */
function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const toast     = document.createElement('div');
  const icons     = { success:'✅', error:'❌', info:'ℹ️', '':'💬' };

  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || '💬'}</span> ${msg}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation  = 'none';
    toast.style.opacity    = '0';
    toast.style.transform  = 'translateX(40px)';
    toast.style.transition = 'all 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ─────────────────────────────────────────
   INITIALISATION
───────────────────────────────────────── */

/** Boot all tables, charts and event listeners after login. */
function initApp() {
  renderVerification(WORKERS);
  renderProfileApprovals();
  renderUsers(WORKERS);
  renderCoins();
  renderNotifications();
  renderAnalytics();
  setTimeout(renderChart, 100);

  // Close any modal when clicking outside it
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });
}

/* ─────────────────────────────────────────
   KEYBOARD SHORTCUTS
───────────────────────────────────────── */

document.addEventListener('keydown', e => {
  // Press Enter on login screen
  const loginScreen = document.getElementById('login-screen');
  if (e.key === 'Enter'
    && loginScreen
    && loginScreen.style.display !== 'none'
    && !loginScreen.classList.contains('hide')
  ) {
    doLogin();
  }

  // Press Escape to close open modals
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
});
