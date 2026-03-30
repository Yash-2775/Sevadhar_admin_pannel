/* ══════════════════════════════════════════
   SEVADHAR ADMIN PANEL — script.js
   ══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   DATA STORE
───────────────────────────────────────── */

const WORKERS = [
  { id:1,  name:'Ravi Kumar',    phone:'+91 9876501234', services:['Cleaning','Plumbing'],      aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-18', rating:null, coins:0,    joined:'Jan 2025', city:'Mumbai', socialLinks: [{platform:'LinkedIn', url:'https://linkedin.com/'}, {platform:'Instagram', url:'https://instagram.com/'}] },
  { id:2,  name:'Priya Devi',    phone:'+91 9845612345', services:['Plumbing'],                 aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-03-12', rating:4.8,  coins:1240, joined:'Feb 2025', city:'Pune'      },
  { id:3,  name:'Mohan Singh',   phone:'+91 9712345678', services:['Electrical'],               aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-19', rating:null, coins:0,    joined:'Mar 2025', city:'Nashik'    },
  { id:4,  name:'Sunita Rao',    phone:'+91 9988776655', services:['Childcare','Cooking'],      aadharFront:'🪪', aadharBack:'🪪', otp:false, status:'Rejected', date:'2025-03-10', rating:null, coins:0,    joined:'Jan 2025', city:'Mumbai'    },
  { id:5,  name:'Anjali Mehta',  phone:'+91 9512345678', services:['Cooking'],                  aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-03-05', rating:4.9,  coins:3200, joined:'Dec 2024', city:'Thane'     },
  { id:6,  name:'Suresh Gupta',  phone:'+91 9823456789', services:['Carpentry','Painting'],     aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-20', rating:null, coins:0,    joined:'Mar 2025', city:'Pune'      },
  { id:7,  name:'Kavitha Nair',  phone:'+91 9965432100', services:['Cooking','Cleaning'],       aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-21', rating:null, coins:0,    joined:'Mar 2025', city:'Mumbai'    },
  { id:8,  name:'Ramesh Kumar',  phone:'+91 9811234567', services:['AC Repair'],                aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-02-28', rating:4.6,  coins:5400, joined:'Nov 2024', city:'Nashik'    },
  { id:9,  name:'Deepa Sharma',  phone:'+91 9900112233', services:['Childcare'],                aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Pending',  date:'2025-03-22', rating:null, coins:0,    joined:'Mar 2025', city:'Aurangabad'},
  { id:10, name:'Vikram Singh',  phone:'+91 9832100000', services:['Plumbing','Electrical'],    aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Rejected', date:'2025-03-08', rating:null, coins:0,    joined:'Feb 2025', city:'Pune'      },
  { id:11, name:'Anita Verma',   phone:'+91 9123456780', services:[],                           aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-03-01', rating:null, coins:0,    joined:'Jan 2025', city:'Mumbai', type:'SR' },
  { id:12, name:'Rajesh Joshi',  phone:'+91 9988112233', services:[],                           aadharFront:'🪪', aadharBack:'🪪', otp:true,  status:'Approved', date:'2025-02-15', rating:null, coins:0,    joined:'Feb 2025', city:'Pune',   type:'SR' }
];

const PROFILE_UPDATES = [
  { id:1, workerId:2, workerName:'Priya Devi',   phone:'+91 9845612345', field:'Added Service', oldVal:'Plumbing',    newVal:'Plumbing, AC Repair',  date:'2025-03-20', status:'Pending'  },
  { id:2, workerId:5, workerName:'Anjali Mehta', phone:'+91 9512345678', field:'City',          oldVal:'Thane',       newVal:'Mumbai',               date:'2025-03-19', status:'Pending'  },
  { id:3, workerId:8, workerName:'Ramesh Kumar', phone:'+91 9811234567', field:'Profile Photo', oldVal:'Old Photo', oldPhoto:'https://via.placeholder.com/160?text=Old+Photo', newVal:'New Photo uploaded', newPhoto:'https://via.placeholder.com/160?text=New+Photo', date:'2025-03-18', status:'Pending'  },
  { id:4, workerId:2, workerName:'Priya Devi',   phone:'+91 9845612345', field:'Bio',           oldVal:'—',           newVal:'10 yrs experience…',   date:'2025-03-15', status:'Approved' },
];

const COINS_REQUESTS = [
  { id:1, workerId:2, name:'Priya Devi',   phone:'+91 9845612345', coins:1200, amount:600,  upi:'priya.devi@okaxis',  date:'2025-03-21', requestedAt:'2025-03-21T09:30:00', status:'Pending'  },
  { id:2, workerId:5, name:'Anjali Mehta', phone:'+91 9512345678', coins:3000, amount:1500, upi:'anjali.mehta@oksbi', date:'2025-03-20', requestedAt:'2025-03-20T14:45:00', status:'Pending'  },
  { id:3, workerId:8, name:'Ramesh Kumar', phone:'+91 9811234567', coins:1700, amount:850,  upi:'ramesh.k@okhdfc',    date:'2025-03-19', requestedAt:'2025-03-19T11:15:00', status:'Approved' },
  { id:4, workerId:5, name:'Anjali Mehta', phone:'+91 9512345678', coins:200,  amount:100,  upi:'anjali.mehta@oksbi', date:'2025-03-15', requestedAt:'2025-03-15T16:05:00', status:'Approved' },
  { id:5, workerId:8, name:'Ramesh Kumar', phone:'+91 9811234567', coins:800,  amount:400,  upi:'ramesh.k@okhdfc',    date:'2025-03-10', requestedAt:'2025-03-10T08:20:00', status:'Rejected' },
  { id:6, workerId:2, name:'Priya Devi',   phone:'+91 9845612345', coins:500,  amount:250,  upi:'priya.devi@okaxis',  date:'2025-03-22', requestedAt:'2025-03-22T10:10:00', status:'Pending'  },
  { id:7, workerId:5, name:'Kavitha Nair', phone:'+91 9965432100', coins:400,  amount:200,  upi:'kavitha.n@ybl',      date:'2025-03-21', requestedAt:'2025-03-21T13:55:00', status:'Pending'  },
  { id:8, workerId:11, name:'Anita Verma', phone:'+91 9123456780', coins:600, amount:300, upi:'anita.v@okicici', date:'2025-03-23',  requestedAt:'2025-03-23T11:00:00', status:'Pending' },
  { id:9, workerId:12, name:'Rajesh Joshi', phone:'+91 9988112233', coins:1000, amount:500, upi:'rajesh.j@okhdfc', date:'2025-03-22', requestedAt:'2025-03-22T09:15:00', status:'Approved' }
];

const NOTIFICATIONS = [
  { id:1, type:'profile', workerId:7, text:'New worker registration from Kavitha Nair (Cooking, Cleaning)',          time:'5 min ago',  unread:true  },
  { id:2, type:'comment', workerId:9, commentId:101, text:'Deepa Sharma commented on your post: "Great profile!"',              time:'18 min ago', unread:true  },
  { id:3, type:'profile', workerId:2, text:'Withdrawal request of ₹600 from Priya Devi — UPI pending',              time:'1 hr ago',   unread:true  },
  { id:4, type:'profile', workerId:5, text:'Profile update request from Anjali Mehta — city change',                time:'2 hrs ago',  unread:true  },
  { id:5, type:'comment', workerId:6, commentId:102, text:'Suresh Gupta commented: "Can you share your ID proof?"',               time:'3 hrs ago',  unread:true  },
  { id:6, type:'profile', workerId:8, text:'Ramesh Kumar\'s withdrawal of ₹850 was approved',                       time:'5 hrs ago',  unread:false },
  { id:7, type:'profile', workerId:null, text:'Monthly analytics report for March 2025 is ready',                      time:'Yesterday',  unread:false },
  { id:8, type:'profile', workerId:null, text:'API sync completed successfully — 1,284 workers synced',                time:'Yesterday',  unread:false },
];

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
let workerData  = [...WORKERS];
let profileData = [...PROFILE_UPDATES];
let coinsData   = [...COINS_REQUESTS];
let userSortOrder = ''; // 'asc' or 'desc' for joined date
let userTabType = 'SP'; // Active user tab state logic

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

function switchUserTab(type, el) {
  userTabType = type;
  const tabs = el.parentElement.querySelectorAll('.tab');
  tabs.forEach(t => {
    t.classList.remove('active');
    t.style.borderBottom = 'none';
    t.style.color = 'var(--text-secondary)';
    t.style.fontWeight = 'normal';
  });
  el.classList.add('active');
  el.style.borderBottom = '2px solid var(--orange)';
  el.style.color = 'var(--orange)';
  el.style.fontWeight = '600';
  
  const colName = document.getElementById('manage-users-col-name');
  const statusFilter = document.getElementById('user-status-filter');
  const joinedFilter = document.getElementById('user-joined-filter');
  const colServices = document.getElementById('manage-users-col-services');
  if (type === 'SR') {
    if (colName) colName.textContent = 'User';
    if (statusFilter) statusFilter.style.display = 'none';
    if (joinedFilter) joinedFilter.style.display = 'none';
    if (colServices) colServices.style.display = 'none';
  } else {
    if (colName) colName.textContent = 'Worker';
    if (statusFilter) statusFilter.style.display = 'inline-block';
    if (joinedFilter) joinedFilter.style.display = 'inline-block';
    if (colServices) colServices.style.display = '';
  }

  // Re-render users
  sortUsersByJoined(userSortOrder);
}

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

/** Format date/time to 12-hour clock (e.g. "21 Mar 2025 03:30 PM") */
function formatDateTime12hr(value) {
  if (!value) return '';
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;

  const day   = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-IN', { month: 'short' });
  const year  = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}

/* ─────────────────────────────────────────
   RENDER — WORKER VERIFICATION TABLE
───────────────────────────────────────── */

function renderVerification(data) {
  const tbody = document.getElementById('verification-tbody');
  if (!data.length) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty"><div class="empty-icon">🔍</div><div class="empty-text">No workers found</div></div></td></tr>`;
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
      <!-- <td>${w.otp
        ? '<span style="color:var(--green);font-size:18px">✓</span>'
        : '<span style="color:var(--red);font-size:18px">✗</span>'}</td> -->
      <td><button class="btn btn-ghost btn-sm" onclick="viewDocs(${w.id})">View Docs 📄</button></td>
      <td style="color:var(--text-muted);font-size:12px">${w.date}</td>
      <td>${statusBadge(w.status)}</td>
      <td>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
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
      <td style="color:var(--text-muted);max-width:140px;font-size:12px">
        ${p.field === 'Profile Photo'
          ? `
            <div style="display:flex;align-items:center;gap:8px">
              <button class="btn btn-ghost btn-xs" onclick="viewProfilePhoto('old', ${p.id})">View Old Photo</button>
            </div>
          `
          : p.oldVal
        }
      </td>
      <td style="color:var(--orange);font-weight:600;max-width:160px;font-size:12px">
        ${p.field === 'Profile Photo'
          ? `
            <div style="display:flex;align-items:center;gap:8px">
              <button class="btn btn-ghost btn-xs" onclick="viewProfilePhoto('new', ${p.id})">View New Photo</button>
            </div>
          `
          : p.newVal
        }
      </td>
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

function viewProfilePhoto(type, approvalId) {
  const approval = profileData.find(p => p.id === approvalId);
  if (!approval) return;

  const imageUrl = type === 'old'
    ? (approval.oldPhoto || 'https://via.placeholder.com/240?text=Old+Photo')
    : (approval.newPhoto || 'https://via.placeholder.com/240?text=New+Photo');

  const title = type === 'old' ? 'Old Photo Preview' : 'New Photo Preview';

  const photoModal = document.getElementById('photo-modal');
  if (!photoModal) return;

  photoModal.querySelector('.modal-title').textContent = `${title} — ${approval.workerName}`;
  photoModal.querySelector('.modal-body').innerHTML = `
    <div style="text-align:center">
      <img src="${imageUrl}" alt="${title}" style="max-width:100%;max-height:360px;border-radius:10px;" />
      <div style="margin-top:10px;color:var(--text-secondary)">${approval.field}</div>
    </div>
  `;
  openModal('photo-modal');
}

/* ─────────────────────────────────────────
   RENDER — MANAGE USERS TABLE
───────────────────────────────────────── */

function renderUsers(data) {
  let filteredData = data.filter(w => (w.type || 'SP') === userTabType);

  // Apply sorting if set
  let sortedData = [...filteredData];
  if (userSortOrder) {
    sortedData.sort((a, b) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const aParts = a.joined.split(' ');
      const bParts = b.joined.split(' ');
      const aMonth = months.indexOf(aParts[0]);
      const bMonth = months.indexOf(bParts[0]);
      const aYear = parseInt(aParts[1]);
      const bYear = parseInt(bParts[1]);
      
      let cmp = aYear - bYear;
      if (cmp === 0) cmp = aMonth - bMonth;
      
      return userSortOrder === 'asc' ? cmp : -cmp;
    });
  }

  const tbody = document.getElementById('users-tbody');

  tbody.innerHTML = sortedData.map(w => {
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
        <td style="${userTabType === 'SR' ? 'display:none;' : ''}">${w.services.map(s => `<span class="service-tag" style="font-size:11px">${s}</span>`).join('')}</td>
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
            <button class="btn btn-sm" style="background:var(--green-pale);color:var(--green);border:none"
              onclick="shareUserProfile(${w.id})">Share</button>
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

  tbody.innerHTML = coinsData.map(c => {
    const requested = formatDateTime12hr(c.requestedAt || c.date);
    const user = WORKERS.find(w => w.id === c.workerId) || { coins: 0, type: 'SP' };
    const totalConvertedCoins = coinsData.filter(req => req.workerId === c.workerId && req.status === 'Approved').reduce((acc, req) => acc + req.coins, 0);
    const totalBalance = user.coins;
    const userTypeStr = (user.type || 'SP') === 'SP' ? 'SP' : 'SR';
    
    return `
    <tr>
      <td>
        <div class="user-cell">
          <div class="avatar">${c.name[0]}</div>
          <div>
            <div class="user-name">${c.name}</div>
            <div class="user-phone">${c.phone}</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${userTypeStr}</div>
          </div>
        </div>
      </td>
      <td><span class="coins-amount">${c.coins} 🪙</span></td>
      <td><strong>₹${c.amount}</strong></td>
      <td><span class="coins-amount" style="color:var(--green)">${totalConvertedCoins} 🪙</span></td>
      <td><span class="coins-amount">${totalBalance} 🪙</span></td>
      <td><span class="upi-id">${c.upi}</span></td>
      <td style="color:var(--text-muted);font-size:12px">${requested}</td>
      <td>${statusBadge(c.status)}</td>
      <td>
        <div style="display:flex;gap:6px">
          ${c.status === 'Pending' ? `
            <button class="btn btn-green btn-sm" onclick="openCoinsModal(${c.id})">Approve</button>
            <button class="btn btn-red btn-sm" onclick="rejectCoins(${c.id})">Reject</button>
          ` : `
            <button class="btn btn-orange btn-sm" onclick="openCoinsModal(${c.id})">Details</button>
          `}
        </div>
      </td>
    </tr>
  `;
  }).join('');
}

/* ─────────────────────────────────────────
   RENDER — NOTIFICATIONS
───────────────────────────────────────── */

function renderNotifications() {
  const list = document.getElementById('notif-list');

  list.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="handleNotificationClick(${n.id})">
      <div class="notif-dot ${n.unread ? '' : 'read'}"></div>
      <div class="notif-content">
        <div class="notif-text">${n.text}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    </div>
  `).join('');

  updateNotificationBadge();
}

function updateNotificationBadge() {
  const badge = document.getElementById('notif-badge');
  if (!badge) return;
  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;
  badge.textContent = unreadCount;
  badge.style.display = unreadCount ? 'inline-flex' : 'none';
}

function handleNotificationClick(id) {
  const notif = NOTIFICATIONS.find(n => n.id === id);
  if (!notif) return;

  // Mark as read/update counts
  if (notif.unread) {
    notif.unread = false;
    updateNotificationBadge();
  }

  // Navigate based on type
  if (notif.type === 'comment') {
    showPage('verification', document.querySelector('[onclick*=verification]'));
    openWorkerModal(notif.workerId);
    // Add comment context if needed
    const modalBody = document.getElementById('modal-worker-body');
    if (modalBody) {
      const commentHtml = `<div style="margin-top:14px;padding:12px;border:1px solid var(--border);border-radius:10px;background:var(--gray-light)"><strong>Comment:</strong> ${notif.text}</div>`;
      modalBody.insertAdjacentHTML('beforeend', commentHtml);
    }
  } else if (notif.type === 'profile') {
    showPage('users', document.querySelector('[onclick*=users]'));
    if (notif.workerId) {
      openWorkerModal(notif.workerId);
    }
  } else {
    showPage('notifications', document.querySelector('[onclick*=notifications]'));
  }
}

/* ─────────────────────────────────────────
   RENDER — SERVICE CATEGORY BREAKDOWN
───────────────────────────────────────── */

function renderServiceBreakdown() {
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
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;width:100%">
        <div class="chart-bar-label" style="margin-bottom:4px;font-weight:600;">${v}</div>
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

  const profilePhoto = w.profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(w.name)}&background=random&size=80`;
  const bio = w.bio || `Experienced ${w.services[0] ? w.services[0].toLowerCase() : 'service'} professional committed to high-quality work and reliable service.`;
  const galleryHtml = (w.gallery || [1,2,3]).map(g => `<img src="https://via.placeholder.com/60?text=Work+${g}" style="border-radius:6px;width:60px;height:60px;object-fit:cover;">`).join('');
  const socialLinks = w.socialUrl ? `<a href="${w.socialUrl}" target="_blank" style="color:var(--blue);text-decoration:none;">View Profile</a>` : '<span style="color:var(--text-muted)">Not provided</span>';

  document.getElementById('modal-worker-body').innerHTML = `
    <div style="display:flex;gap:16px;margin-bottom:20px;align-items:center;">
      <img src="${profilePhoto}" alt="${w.name}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid var(--border);">
      <div>
        <div style="font-size:18px;font-weight:600;">${w.name}</div>
        <div style="color:var(--text-secondary);font-size:13px;margin-top:4px;">${bio}</div>
        <div style="margin-top:6px;font-size:13px;">Social: ${socialLinks}</div>
      </div>
    </div>

    <div class="profile-section">Personal Information</div>
    <div class="profile-grid">
      <div class="profile-field"><div class="profile-label">Full Name</div>         <div class="profile-value">${w.name}</div></div>
      <div class="profile-field"><div class="profile-label">Phone (Login ID)</div>  <div class="profile-value">${w.phone}</div></div>
      <div class="profile-field"><div class="profile-label">City</div>              <div class="profile-value">${w.city}</div></div>
      <div class="profile-field"><div class="profile-label">Joined</div>            <div class="profile-value">${w.joined}</div></div>
      <div class="profile-field"><div class="profile-label">Rating</div>            <div class="profile-value">${w.rating ? '⭐ ' + w.rating : '—'}</div></div>
      <div class="profile-field"><div class="profile-label">Seva Coins</div>        <div class="profile-value">🪙 ${w.coins}</div></div>
      <div class="profile-field"><div class="profile-label">Status</div>            <div class="profile-value">${statusBadge(w.status)}</div></div>
    </div>

    <div class="profile-section">Services Offered</div>
    <div style="margin-bottom:20px;">${w.services.map(s => `<span class="service-tag">${s}</span>`).join('')}</div>

    <div class="profile-section">Work Gallery</div>
    <div style="display:flex;gap:10px;margin-bottom:20px;">
      ${galleryHtml}
    </div>

    <div class="profile-section">Social Media</div>
    <div style="display:flex;gap:10px;margin-bottom:20px;">
      ${w.socialLinks && w.socialLinks.length > 0 
        ? w.socialLinks.map(s => `<a href="${s.url}" target="_blank" style="text-decoration:none;color:var(--blue);display:inline-flex;align-items:center;padding:4px 8px;border:1px solid var(--border);border-radius:4px;font-size:13px;background:var(--gray-light)">🔗 ${s.platform}</a>`).join('')
        : '<span style="color:var(--text-muted);font-size:13px;">No social media links provided.</span>'}
    </div>

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
      <button class="btn btn-red"   onclick="updateWorkerStatus(${w.id},'Rejected')">Reject</button>
      <button class="btn btn-green" onclick="updateWorkerStatus(${w.id},'Approved')">✓ Approve Worker</button>
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

  const user = WORKERS.find(w => w.id === c.workerId) || { coins: 0 };
  const currentBalance = user.coins;
  const totalConvertedCoins = coinsData.filter(req => req.workerId === c.workerId && req.status === 'Approved').reduce((acc, req) => acc + req.coins, 0);
  const totalConvertedRupees = coinsData.filter(req => req.workerId === c.workerId && req.status === 'Approved').reduce((acc, req) => acc + req.amount, 0);

  document.getElementById('coins-modal-body').innerHTML = `
    <div style="background:var(--orange-pale);border-radius:12px;padding:20px;margin-bottom:20px;text-align:center">
      <div style="font-size:36px;font-weight:700;color:var(--orange);font-family:var(--font-display)">₹${c.amount}</div>
      <div style="color:var(--text-secondary);font-size:13px;margin-top:4px">${c.coins} Seva Coins @ ₹0.50/coin</div>
    </div>
    <div class="profile-grid">
      <div class="profile-field"><div class="profile-label">Worker Name</div><div class="profile-value">${c.name}</div></div>
      <div class="profile-field"><div class="profile-label">Phone</div>      <div class="profile-value">${c.phone}</div></div>
      <div class="profile-field"><div class="profile-label">UPI ID</div>     <div class="profile-value"><span class="upi-id">${c.upi}</span></div></div>
      <div class="profile-field"><div class="profile-label">Requested</div>  <div class="profile-value">${formatDateTime12hr(c.requestedAt || c.date)}</div></div>
      <div class="profile-field"><div class="profile-label">Current Balance</div><div class="profile-value" style="font-weight:600">${currentBalance} 🪙</div></div>
      <div class="profile-field"><div class="profile-label">Total Converted</div><div class="profile-value" style="color:var(--green)">₹${totalConvertedRupees} (${totalConvertedCoins} 🪙)</div></div>
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
  const worker = WORKERS.find(w => w.id === id);
  if (!worker) return;

  const message = status === 'Approved'
    ? `Are you sure you want to approve ${worker.name}'s profile?`
    : `Are you sure you want to reject ${worker.name}'s profile?`;

  document.getElementById('confirm-title').textContent =
    status === 'Approved' ? 'Approve Worker' : 'Reject Worker';

  document.getElementById('confirm-body').textContent = message;

  const btn = document.getElementById('confirm-action-btn');

  // Change button color dynamically
  btn.className = status === 'Approved'
    ? 'btn btn-green'
    : 'btn btn-red';

  btn.textContent = status === 'Approved' ? 'Approve' : 'Reject';

  btn.onclick = () => {
    worker.status = status;

    renderVerification(workerData);
    renderUsers(workerData);

    closeModal('confirm-modal');
  };

  openModal('confirm-modal');
}


/* ─────────────────────────────────────────
   ACTIONS — PROFILE APPROVALS
───────────────────────────────────────── */

function approveProfile(id) {
  updateProfileStatus(id, 'Approved');
}

function rejectProfile(id) {
  updateProfileStatus(id, 'Rejected');
}

function updateProfileStatus(id, status) {
  const p = profileData.find(x => x.id === id);
  if (!p) return;

  const message = status === 'Approved'
    ? `Are you sure you want to approve ${p.workerName}'s profile update?`
    : `Are you sure you want to reject ${p.workerName}'s profile update?`;

  document.getElementById('confirm-title').textContent =
    status === 'Approved' ? 'Approve Profile' : 'Reject Profile';

  document.getElementById('confirm-body').textContent = message;

  const btn = document.getElementById('confirm-action-btn');

  btn.className = status === 'Approved'
    ? 'btn btn-green'
    : 'btn btn-red';

  btn.textContent = status === 'Approved' ? 'Approve' : 'Reject';

  btn.onclick = () => {
    p.status = status;
    renderProfileApprovals();
    showToast(`Profile update ${status.toLowerCase()}`, status === 'Approved' ? 'success' : 'error');
    closeModal('confirm-modal');
  };

  openModal('confirm-modal');
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

function shareUserProfile(id) {
  const w = WORKERS.find(x => x.id === id);
  if (!w) return;
  const link = `${window.location.origin}/worker-profile/${w.id}`;
  navigator.clipboard.writeText(link).then(() => {
    showToast(`Profile link for ${w.name} copied!`, 'success');
  }).catch(err => {
    prompt('Copy this link:', link);
  });
}

let actionContext = null;

function openReasonModal(action, userId) {
  const w = WORKERS.find(x => x.id === userId);
  if (!w) return;
  actionContext = { action, userId, workerName: w.name };
  
  document.getElementById('reason-modal-title').textContent = action === 'deactivate' ? 'Deactivate User' : 'Delete User';
  document.getElementById('reason-modal-desc').textContent = `Please select reasons for ${action === 'deactivate' ? 'deactivating' : 'deleting'} ${w.name}:`;
  
  document.querySelectorAll('.reason-cb').forEach(cb => cb.checked = false);
  document.getElementById('reason-custom-msg').value = '';
  document.getElementById('reason-error').style.display = 'none';
  
  document.getElementById('reason-modal-footer').innerHTML = `
    <button class="btn btn-ghost" onclick="closeModal('reason-modal')">Cancel</button>
    <button class="btn ${action === 'deactivate' ? 'btn-yellow' : 'btn-red'}" onclick="confirmReasonAction()">Confirm ${action === 'deactivate' ? 'Deactivate' : 'Delete'}</button>
  `;
  
  openModal('reason-modal');
}

function confirmReasonAction() {
  const selectedCBs = Array.from(document.querySelectorAll('.reason-cb:checked'));
  if (selectedCBs.length === 0) {
    document.getElementById('reason-error').style.display = 'block';
    return;
  }
  document.getElementById('reason-error').style.display = 'none';
  
  const reasons = selectedCBs.map(cb => cb.value);
  const customMsg = document.getElementById('reason-custom-msg').value.trim();
  
  const { action, userId, workerName } = actionContext;
  
  if (action === 'deactivate') {
    const w = WORKERS.find(x => x.id === userId);
    if(w) w.status = 'Rejected'; // Assuming 'Rejected' translates to 'Inactive' visually
  } else if (action === 'delete') {
    const idx = WORKERS.findIndex(x => x.id === userId);
    if(idx !== -1) WORKERS.splice(idx, 1);
  }
  
  closeModal('reason-modal');
  sortUsersByJoined(userSortOrder);
  
  const rationale = reasons.join(', ');
  const msgPart = customMsg ? ` – ${customMsg}` : '';
  const notifText = `Your profile was ${action}d because ${rationale}${msgPart}`;
  
  NOTIFICATIONS.unshift({
    id: Date.now(),
    type: 'profile',
    workerId: userId,
    text: `User Notified: ${workerName} – "${notifText}"`,
    time: 'Just now',
    unread: true
  });
  renderNotifications();
  showToast(`Successfully ${action}d ${workerName}`, 'success');
}

function toggleUser(id) {
  openReasonModal('deactivate', id);
}

function deleteUser(id) {
  openReasonModal('delete', id);
}

/* ─────────────────────────────────────────
   SEARCH & FILTER
───────────────────────────────────────── */

/** Filter verification table by name or phone. */
function filterWorkers(query) {
  applyVerificationFilters();
}

/** Filter verification table by service category. */
function filterWorkersByService(service) {
  applyVerificationFilters();
}

/** Filter verification table by status. */
function filterTable() {
  applyVerificationFilters();
}

/** Apply all active filters to verification table. */
function applyVerificationFilters() {
  const searchQuery = document.querySelector('#page-verification .filter-input').value.toLowerCase();
  const serviceFilter = document.querySelector('#page-verification select[onchange*="filterWorkersByService"]').value;
  const statusFilter = document.getElementById('verif-filter').value;

  let filtered = WORKERS;

  if (searchQuery) {
    filtered = filtered.filter(w =>
      w.name.toLowerCase().includes(searchQuery) || w.phone.includes(searchQuery)
    );
  }

  if (serviceFilter) {
    filtered = filtered.filter(w => w.services.includes(serviceFilter));
  }

  if (statusFilter) {
    filtered = filtered.filter(w => w.status === statusFilter);
  }

  renderVerification(filtered);
}

/** Search users by phone or name (phone is the login ID). */
function searchUsers(query) {
  const q = query.toLowerCase();
  const filtered = WORKERS.filter(w =>
    w.name.toLowerCase().includes(q) || w.phone.includes(q)
  );
  renderUsers(filtered);
}

/** Filter users table by Active / Inactive status. */
function filterUsersByStatus(status) {
  let filtered = WORKERS;
  if (status) {
    const map = { Active: ['Approved'], Inactive: ['Rejected', 'Pending'] };
    filtered = WORKERS.filter(w => map[status].includes(w.status));
  }
  renderUsers(filtered);
}

/** Sort users table by joined date. */
function sortUsersByJoined(order) {
  userSortOrder = order;
  // Re-apply current filters
  const statusFilter = document.querySelector('#page-users select[onchange*="filterUsersByStatus"]').value;
  const searchQuery = document.getElementById('user-search').value;
  
  let data = WORKERS;
  if (statusFilter) {
    const map = { Active: ['Approved'], Inactive: ['Rejected', 'Pending'] };
    data = data.filter(w => map[statusFilter].includes(w.status));
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    data = data.filter(w => w.phone.includes(q) || w.name.toLowerCase().includes(q));
  }
  renderUsers(data);
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
  renderServiceBreakdown();
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