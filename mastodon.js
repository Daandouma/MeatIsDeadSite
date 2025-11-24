const mastodonFeed = document.getElementById("mastodon-feed");

async function loadMastodon() {
  try {
    const res = await fetch("https://mastodon.social/api/v1/accounts/lookup?acct=Meatisdead");
    const account = await res.json();

    const postsRes = await fetch(
      `https://mastodon.social/api/v1/accounts/${account.id}/statuses?exclude_replies=true&exclude_reblogs=true`
    );
    const posts = await postsRes.json();

    mastodonFeed.innerHTML = posts.slice(0, 5).map(p => `
      <div class="toot metal-box">
        ${p.content}
        <br><a href="${p.url}" target="_blank">View post</a>
      </div>
    `).join("");

  } catch (err) {
    mastodonFeed.innerHTML = "Couldn't load posts";
  }
}

if (mastodonFeed) loadMastodon();
